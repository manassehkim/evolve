// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Stock {
    constructor() {
        Admins.push(msg.sender);
        //customers.push(msg.sender);
    }

    //events

    event addProducts(string name, string price, string quantity, string expire);
    event deleteProducts(string name, string price, string quantity, string expire);
    event addCustomers(string name, string contact, address custaddress);
    //event deleteCustomer(string name, string contact, address _custaddress);

    //array to store customers
    struct Customer {
        string _name;
        string _contact;
        address _custaddress;
    }

    Customer[] public Customers;

    //array store admins
    address[] public Admins;
    //hasordered for products
    mapping(address => bool) public hasOrdered;

    //array store products
    struct Product {
        string _name;
        string _price;
        string _quantity;
        string _expire;
        uint noofOrders;
    }

    mapping(uint => Product) public products;
    mapping(uint => Customer) public customers;

    uint _productIndex;
    uint _customerIndex;

    uint totalNumberofOrders;

/*
    modifier onlyCustomer() {
        bool isCustomer = false;
        for (uint i = 0; i < Customers.length; i++) {
            if (customers[i] == msg.sender) {
                isCustomer = true;
                break;
            }
        }
        require(isCustomer, "Only Customers or Admin can order");
        _;
    }

*/
    
    //only admin can add, delete
    // Modifier to check if the sender is an admin
    modifier onlyAdmin() {
        bool isAdmin = false;
        for (uint i = 0; i < Admins.length; i++) {
            if (Admins[i] == msg.sender) {
                isAdmin = true;
                break;
            }
        }
        require(isAdmin, "Only admins can perform this operation");
        _;
    }

    //function add product
    function addProduct(string calldata name, string calldata price, string calldata quantity,string calldata expire) external onlyAdmin {
        uint _index = _productIndex;
        products[_index] = Product(name, price, quantity, expire, 0);
        _productIndex += 1;
        emit addProducts(name, price, quantity, expire);
    }

    // Function to update the details of a productt  (restricted to admins)
    function updateProduct(uint _index, string calldata name, string calldata price, string calldata quantity, string calldata expire) external onlyAdmin {
        require(_index < _productIndex, "Invalid productt index");
        Product storage presi = products[_index];
        presi._name = name;
        presi._price = price;
        presi._quantity = quantity;
        presi._expire = expire;
        emit addProducts(name, price, quantity, expire);
    }

    //function orders
    function orderProduct(uint _index) external {
        Product storage presi = products[_index];
        presi.noofOrders = presi.noofOrders + 1;
        totalNumberofOrders = totalNumberofOrders + 1;
        hasOrdered[msg.sender] = true;
    }

    //function view all

    function getAllProducts() public view returns (Product[] memory infos) {
        infos = new Product[](_productIndex);
        uint index = 0;
        for (uint i = 0; i < _productIndex; ++i) {
            infos[index] = products[i];
            index += 1;
        }

        return infos;
    }

    //function add customer
    function addCustomer(string calldata name, string calldata contact, address custaddress) external onlyAdmin {
        uint _index = _customerIndex;
        customers[_index] = Customer(name, contact, custaddress);
        _customerIndex += 1;
        emit addCustomers(name, contact, custaddress);
    }

/*
    function deleteCustomer(string calldata _name, string calldata contact, address _custaddress) public onlyAdmin {
        for (uint i = 0; i < customers.length; i++) {
            if (customers[i] == Customer) {
                // Swap the element to be deleted with the last element in the array
                customers[i] = customers[customers.length - 1];
                // Remove the last element (duplicate)
                customers.pop();
                break;
            }
        }
    }
*/
    //function return total number of votes
    function returnTotalNumberOFOrders() public view returns (uint) {
        return totalNumberofOrders;
    }
}
