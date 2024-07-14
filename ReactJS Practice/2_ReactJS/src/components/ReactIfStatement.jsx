import React from 'react'

const ReactIfStatement = () => {

    let flag = 0;
    function isLoggedin(){
        if(flag==0){
            console.log("Logged in")
            flag = 1
        }
        else{
            console.log("Logged Out")
            flag =0
        }
    }

  return (
    <div>
      <h3>React If Statement</h3>
      <p>We can use the if JavaScript operator to decide which component to render.</p>

      <button onClick={isLoggedin}>Sign In/ Sign Out</button>

    </div>
  )
}

export default ReactIfStatement
