import React from "react";
import "./App.css";
// import axios from "axios";
// import { Route, Switch } from "react-router-dom";
import Search from "./Search";
// import Card from "./Card";
// import SData from "./Sdata";

function App() {
  
  return <Search />
}


// axios 
// function App() {
//   const [num, setNum] = useState("");
//   const [name, setName]= useState();
//   const [move, setMoves]= useState();
//   useEffect(()=>{
//     async function getData(){
//       const res = await axios.get(`https://pokeapi.co/api/v2/type/${num}`)
//       setName(res.data.name)
//       setMoves(res.data.moves.length)
//     }

//     getData()
//   })

//   return (
//     <>
//       <h1>{num}</h1>
//       <h1>{name}</h1>
//       <h1>{move}</h1>
//       <select
//         value={num}
//         onChange={(Event) => {
//           setNum(Event.target.value);
//         }}
//       >
//         <option value="1"> 1 </option>
//         <option value="25"> 25 </option>
//         <option value="3"> 3 </option>
//         <option value="4"> 4 </option>
//         <option value="5"> 5 </option>
//       </select>
//     </>
//   );
// }

// useeffect
// function App() {
//   const [num, setNum] = useState(1);

//   useEffect(()=>{
//     // alert('i am clicked')
//     document.title = `you clicked me ${num}`
//   })
//   return (
//     <>
//       <button
//         onClick={() => {
//           setNum(num + 1);
//         }}
//       >
//         click me {num}
//       </button>
//     </>
//   );
// }

// function App() {
//   const [Num, setNum] = useState(0);
//   // const [items, setItems] = useState([]);

//   const incNum = () => {
//     setNum(Num + 1);
//   };

//     const decNum = () => {
//       if(Num>0){
//         setNum(Num - 1);
//       }
//       else{
//         alert('zero limit reach')
//         setNum(0);
//       }
//     };

//   return (
//     <>
//       <h1>{Num}</h1>
//       <button onClick={incNum}> + </button>
//       <button onClick={decNum}>-</button>
//     </>
//   );
// }

// function App() {
//   const [fullName, setFullName] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     mob: "",
//   });

//   const change = (Event) => {
//     // const value = Event.target.value;
//     // const name = Event.target.name;

//     const { value, name} = Event.target;

//     setFullName((prev) => {
//       return{
//        ...prev,
//        [name]: value
//       }

// if (name === "fname") {
//   return {
//     fname: value,
//     lname: prev.lname,
//     email: prev.email,
//     mob: prev.mob
//   };
// } else if (name === "lname") {
//   return {
//     fname: prev.fname,
//     lname: value,
//     email: prev.email,
//     mob: prev.mob
//   };
// } else if (name === "email") {
//   return {
//     fname: prev.fname,
//     lname: prev.lname,
//     email: value,
//     mob: prev.mob
//   };
// } else if (name === "mob") {
//   return {
//     fname: prev.fname,
//     lname: prev.lname,
//     email: prev.email,
//     mob: value
//   };
// }
//   });
// };

//   const onsubmit = (e) => {
//     e.preventDefault();
//     alert(fullName);
//   };
//   return (
//     <>
//       <form onSubmit={onsubmit}>
//         <h1 className="headingStyle">
//           Hello {fullName.fname} {fullName.lname} {fullName.email} {fullName.mob}
//         </h1>
//         <div className="new">
//           <input
//             type="text"
//             name="fname"
//             placeholder="Enter Your Name"
//             onChange={change}
//             value={fullName.fname}
//           />
//           <br />
//           <br />
//           <input
//             type="text"
//             name="lname"
//             placeholder="Enter Your Last Name"
//             onChange={change}
//             value={fullName.lname}
//           />
//           <br /> <br />
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Your Email"
//             onChange={change}
//             value={fullName.email}
//           />
//           <br /> <br />
//           <input
//             type="text"
//             name="mob"
//             placeholder="Enter Your Mobile NO"
//             onChange={change}
//             value={fullName.mob}
//           />
//           <br /> <br />
//           <button type="submit">Click Me</button>
//         </div>
//       </form>
//     </>
//   );
// }

// form submit
// function App() {
//   const [fullName, setFullName] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     mob: "",
//   });

//   const change = (Event) => {
//     // const value = Event.target.value;
//     // const name = Event.target.name;

//     const { value, name} = Event.target;

//     setFullName((prev) => {
//       if (name === "fname") {
//         return {
//           fname: value,
//           lname: prev.lname,
//           email: prev.email,
//           mob: prev.mob
//         };
//       } else if (name === "lname") {
//         return {
//           fname: prev.fname,
//           lname: value,
//           email: prev.email,
//           mob: prev.mob
//         };
//       } else if (name === "email") {
//         return {
//           fname: prev.fname,
//           lname: prev.lname,
//           email: value,
//           mob: prev.mob
//         };
//       } else if (name === "mob") {
//         return {
//           fname: prev.fname,
//           lname: prev.lname,
//           email: prev.email,
//           mob: value
//         };
//       }
//     });
//   };

//   const onsubmit = (e) => {
//     e.preventDefault();
//     alert(fullName);
//   };
//   return (
//     <>
//       <form onSubmit={onsubmit}>
//         <h1 className="headingStyle">
//           Hello {fullName.fname} {fullName.lname} {fullName.email} {fullName.mob}
//         </h1>
//         <div className="new">
//           <input
//             type="text"
//             name="fname"
//             placeholder="Enter Your Name"
//             onChange={change}
//             value={fullName.fname}
//           />
//           <br />
//           <br />
//           <input
//             type="text"
//             name="lname"
//             placeholder="Enter Your Last Name"
//             onChange={change}
//             value={fullName.lname}
//           />
//           <br /> <br />
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Your Email"
//             onChange={change}
//             value={fullName.email}
//           />
//           <br /> <br />
//           <input
//             type="text"
//             name="mob"
//             placeholder="Enter Your Mobile NO"
//             onChange={change}
//             value={fullName.mob}
//           />
//           <br /> <br />
//           <button type="submit">Click Me</button>
//         </div>
//       </form>
//     </>
//   );
// }

// function App() {
//   const [name, setName] = useState("");
//   const [fullName, setFullName] = useState();
//   const change = (Event) => {
//     console.log(Event.target.value);
//     setName(Event.target.value);
//   };

//   const onsubmit = () => {
//     setFullName(name);
//   };
//   return (
//     <>
//       <h1 className="headingStyle">Hello {fullName}</h1>
//       <input
//         type="text"
//         onChange={change}
//         placeholder="Enter Your Name"
//         value={name}
//       />
//       <br />
//       <br />
//       <input type="text" placeholder="Enter Your Password" />
//       <br /> <br />
//       <button onClick={onsubmit}>Click Me</button>
//     </>
//   );
// }

// function App() {
//   const col = "#8e44ad";
//   const [colo, setCol] = useState(col);
//   const [bt, setBt] = useState("click me");
//   const bgChange = () => {
//     // console.log("clicked");
//     const red = "#fff";
//     setCol(red);
//     setBt("wow 🦸");
//   };
//   const btnChange = () => {
//     console.log("clicked");
//     const black = "#000000";
//     setCol(black);
//     setBt("ayo ! 😠");
//   };
//   return (
//     <>
//       <div style={{ backgroundColor: colo }}>
//         <button onMouseEnter={bgChange} onMouseLeave={btnChange}>
//           {bt}
//         </button>
//       </div>
//     </>
//   );
// }

// function App() {
//   // const state = useState();

//   const date = new Date().toLocaleTimeString();
//   console.log(date);

//   const [count, setCount] = useState(date);

//   const ISum = () => {
//     const timeOf = new Date().toLocaleTimeString();
//     setCount(timeOf);
//   };

//   setInterval(ISum, 1000)
//   return (
//     <>
//       <h1 className="headingStyle">{date}</h1>
//       {/* <button onClick={ISum}>Click Me</button> */}
//     </>
//   );
// }

// function App(props) {
//   return (
//     <div>
//       <h1 className="headingStyle">List Out of 5 series Name </h1>
//       {SData.map((e, index) => (
//         <Card
//           key={index}
//           imgsrc={e.imgsrc}
//           title={e.title}
//           name={e.name}
//           link={e.link}
//         />
//       ))}
//     </div>
//   );
// }

export default App;
