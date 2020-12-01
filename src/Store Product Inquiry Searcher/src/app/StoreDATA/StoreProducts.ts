import { Profile } from "../models/DataProductInfo";

export const PROFILE: Profile[] = [
// This is the store's product data for the user/client to see when they search for a product. The website will this data from the backend to do this. However the client can not see the backend
  // They can only see the front end or the UI
  { item: 'Apples', inquiry: { sku: 4401,price: 1.49,SalePrice: .99, IsItemOnSale: 'Yes'}},
  { item: 'Pears', inquiry: { sku: 4802,price: 1.85,SalePrice: 1.09, IsItemOnSale: 'No'}},
  { item: 'Lettuce', inquiry: { sku: 5341,price: 1.85,SalePrice: 1.09, IsItemOnSale: 'Yes'}},
  { item: 'Peppers', inquiry: { sku: 3325,price: .79,SalePrice: .39, IsItemOnSale: 'Yes'}},
  { item: 'Potatoes', inquiry: { sku: 1129,price: 2.85,SalePrice: 1.99, IsItemOnSale: 'No'}},
  { item: 'Milk', inquiry: { sku: 11332265,price: 3.15,SalePrice: 2.49, IsItemOnSale: 'Yes'}},
  { item: 'Chips', inquiry: { sku: 34509122,price: 2.99,SalePrice: 1.99, IsItemOnSale: 'No'}},
  { item: 'Ham', inquiry: { sku: 44611299,price: 1.75,SalePrice: 1.50, IsItemOnSale: 'Yes'}},
  { item: 'Bologna', inquiry: { sku: 44611299,price: 1.39,SalePrice: .99, IsItemOnSale: 'No'}},
  { item: 'Pumpkin Pie', inquiry: { sku: 95651210,price: 5.39,SalePrice: 4.25, IsItemOnSale: 'No'}},
  { item: 'Honey', inquiry: { sku: 15451337,price: 2.29,SalePrice: 1.85, IsItemOnSale: 'No'}},
  { item: 'Peanuts', inquiry: { sku: 71251067,price: 1.55,SalePrice: 1.25, IsItemOnSale: 'Yes'}},
  { item: 'Candy Bar', inquiry: { sku: 31441086,price: .89,SalePrice: .55, IsItemOnSale: 'Yes'}},
  { item: 'Laundry Detergent', inquiry: { sku: 11223069,price: 3.99,SalePrice: 2.99, IsItemOnSale: 'No'}},
  { item: 'Paper Towels', inquiry: { sku: 93233488,price: 2.15,SalePrice: 1.51, IsItemOnSale: 'Yes'}},
  { item: 'Yogurt', inquiry: { sku: 41287391,price: 1.05,SalePrice: .79, IsItemOnSale: 'No'}},

];
