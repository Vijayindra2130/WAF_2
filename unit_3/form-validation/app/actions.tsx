"use server";

export async function submitForm(formData: FormData){
 //get data from the form
 const name = formData.get("name") as string;
 const email = formData.get("email") as string;
 const age = Number(formData.get("age"));

 //server side validation
 if(!name || !email || !age){
    return{
        success: false,
        message: "All fields are required",
    };
 }

 if(name.length < 3) {
    return {
     success: false,
     message: "Name must contain atleast 3 characters",
 };
 }
 if(!email.includes("@")) {
    return {
     success: false,
     message: "Invalid email address",
    };
 }
 if(age < 18) {
  return {
    success: false,
    message: "Age must be 18 and above",
  };
}

console.log("valid data");
console.log("Name:",name);
console.log("email:",email);
console.log("age:",age);

return {
    success: true,
    message: "form submitted successfully",
}
}