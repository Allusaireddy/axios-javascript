 const axios = require('axios');
const { response } = require('express');
 
 axios.get("https://jsonplaceholder.typicode.com/users")
 .then((response)=>{
    console.log(response);
 })
 .catch((err)=>{
    console.log("Rejected", err);
 })

 axios.post("https://jsonplaceholder.typicode.com/users",{
    title : "UserDetails post",
    body : "UserDetails Fetch",
    userId : 1,
    userName : "Sree",
    skills : "Java Full Stack"
 })
 .then((response)=>{
    console.log(response);
 })
 .catch((err)=>{
    console.log("Reject", err);
 })


 axios.put("https://jsonplaceholder.typicode.com/users/1",{
    title : "UserDetails Updated PUT",
    body : "Updated Fetch",
    userId : 1,
    userName : "Sree Challa",
    skills : "Java Full Stack and Mern Stack"
 })
 .then((response)=>{
    console.log(response);
 })
 .catch((err)=>{
    console.log("Reject", err);
 })


 axios.delete("https://jsonplaceholder.typicode.com/users/1")
 .then(res=>console.log("Successfully deleted", res))