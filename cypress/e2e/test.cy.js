import * as LoginComponent from "../components/login_component";
import * as InventoryComponent from "../components/inventory_component";
import * as CartComponent from "../components/cart_component";
import * as CheckoutComponent from "../components/checkout_component";
import * as CheckoutFinishComponent from "../components/checkout_finish_component";

describe("Saucedemo test suit", () => {
  before(() => {
    cy.visit("/"); // visiting the baseURL
    cy.fixture("loginUser").as("user"); //importing login data from fixture file and storing in user alias
    cy.fixture("checkoutInfo").as("checkoutUser"); //importing checkout data from fixture file and storing in checkout user alias
  });
  it("should validate that an order can be completed", () => {
    cy.get("@user").then((user) => {
      LoginComponent.performLogin(user.userName, user.password); //Performing login from fixture -> loginUser data
    });
    InventoryComponent.addToCart().click(); //Adding inventory to the cart
    InventoryComponent.clickToCart().click(); //Clicking the cart
    CartComponent.checkout().click(); //Clicking Checkout
    cy.get("@checkoutUser").then((checkoutUser) => {
      CheckoutComponent.performCheckout( //Entering checkout details from fixture -> checkoutInfo data
        checkoutUser.firstName,
        checkoutUser.lastName,
        checkoutUser.postalCode
      );
    });
    CheckoutFinishComponent.checkoutFinish().click(); // Finish the checkout
    cy.contains(/Thank you for your order!/).should("be.visible"); //Assertion: Success screen should show
  });
});
