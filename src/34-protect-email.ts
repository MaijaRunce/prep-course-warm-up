export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

const protectEmail = (email: string) => {
  for (let i = 0; i < protectEmail.length; i++) {
    const parts = email.split("@");
    console.log(parts);

    if (parts[0].length < 3) {
      return "..." + "@" + parts[1];
    } else {
      if (parts[0].length < 6) {
        return parts[0].slice(0, 2) + "..." + "@" + parts[1];
      }
      return parts[0].slice(0, 3) + "..." + "@" + parts[1];
    }
  }
};

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail("12345@example.com")); // Expected result: 12...@example.com
console.log(protectEmail("12@example.com")); // Expected result: ...@example.com

