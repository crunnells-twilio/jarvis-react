import React from "react";
import TableRow from "./TableRow";
import data from "./data/patient.json"


const fetchSecretData = ()=> {
    const URL = 'https://js-craft.io/secret_data.php'
    const headers = { 'Authorization': 'secret_token' };
    fetch(URL, {headers})
        .then(response => response.json())
        .then(data => setSecretData(data.data));
}

const Profile = () => {
    // once api endpoint is set, replace mydata = data to mydata = {}
    let mydata = data;
    fetch('https://api.example.com/endpoint')
    .then(response => response.json())
    .then(responsedata => {
      // Set the value of data to the fetched API response
    mydata = responsedata;
      console.log(mydata);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  

        const list = []

        for (const key in mydata){
            let obj = {key: key, value: mydata[key]}
            list.push(<TableRow data={obj} />)
        }


        return (
            <table class="table table-striped text-dark">
                <thead>
                </thead>
                <tbody>
                   {list}
                </tbody>
            </table>
        );
    };

    export default Profile;