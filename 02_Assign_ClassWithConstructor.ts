class Bank {
    //properties
    bankName : string;
    bankLocation : string;
    bankIfscCode : number;

    constructor(bankName:string,bankLocation:string,bankIfscCode:number) {
        this.bankName = bankName;
        this.bankLocation = bankLocation;
        this.bankIfscCode = bankIfscCode;
    }

        displayBankDetails() : void  {

            console.log(`This is a ${this.bankName} ${this.bankLocation} ${this.bankIfscCode}`);
 
        }

}
    const bankDetails = new Bank('SBI','Mumbai',124568);

    bankDetails.displayBankDetails();


    //Another example of class with constructor and properties
    
    
  class Book {
    name : string;
    author : string;
    price : number;
    constructor(name :string,author:string,price:number) {
        this.name = name;
        this.author = author;
        this.price = price;
    }
}
    // Creating an instance of the Person class
    const book1 = new Book('Wings of fire','Dr.APJ Kalam',1000);

    const book1Data = { 
        Book : `${book1.name} , ${book1.author}, ${book1.price}`
    };
    console.log(book1Data);
    



    //remove duplicates from array
    function removeDuplicates<T>(array: T[]): T[] {
        return array.filter((value, index, self) => self.indexOf(value) === index);
    }
    
    const numbers: number[] = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
    
    const uniqueNumbers = removeDuplicates(numbers);
    
    console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
    