/** This boundary @class implements the 
planning page for users to access the HDB,
vehicle and child pages

@author hao zhi  */
<template>
    <div>
        <div class="dropdown">
            <!-- @slot dropdown button to edit profiel
            or to access the favourites page-->
            <button class="dropbtn">Hi user</button>
            <div class="dropdown-content">
                <a href="#">Edit profile</a>
                <a href="/favourite">Saved Plans</a>
            </div>
        </div>
<h1 style="text-align:center;">The Planning Page</h1>   
        <div id="plans" class='container'>
            <div id="first" class='container'>
                <Header title="HDB Plan"/>
                <!-- @slot link to hdb overview button -->
                <router-link to="/hdb-overview">
                    <button id="button1" type="submit">
                        Add HDB Plan
                    </button> 
                </router-link>
            </div>
            <div id="second" class='container'>
                <Header title="Vehicle Plan"/>
                <!-- @slot link to vehicle overview button -->
                <button id="button2" type="submit">
                    Add Vehicle Plan
                </button>
            </div>
            <div id="third" class='container'>
                <Header title="Child Plan"/>
                <!-- @slot link to childcare overview button -->
                <button id="button3" type="submit">
                    Add Child Plan
                </button>
            </div>
        </div>
    </div>
    
</template>

<script>
</script>

<style>
#plans {
    display: flex;
    justify-content: space-around;
    align-content: stretch;
    box-sizing: content-box;
}
#first, #second, #third {
    background-size:500px 600px;
    width: 25%;
    height:600px;
    float:left;  
    margin: 25px;
    text-align: center;
    border-radius: 8px;
    border: 4px solid lightblue;
    padding: 20px;
}
#first {background-image: url("https://i0.wp.com/lifefinance.com.sg/wp-content/uploads/2020/01/nguyen-thu-hoai-a15b7LYrfbk-unsplash-scaled.jpg?resize=1024%2C629&ssl=1");}
#second {background-image: url("https://static.carthrottle.com/workspace/uploads/posts/2016/01/e5da17a44b55754be3429d1d5296702c.jpg");}
#third {background-image: url("https://www.nup.com.sg/PublishingImages/Children%27s%20Health/iStock-871046604_resized.jpg");}
#button1,#button2,#button3 {
    display: flex;
    background-color: #4CAF50; /* Green */
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 8px;
    border: 4px solid darkgreen;
}
#button1:hover,#button2:hover,#button3:hover {opacity: 0.8}
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  float: right;
  padding-right: 45px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>