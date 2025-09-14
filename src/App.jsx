import './App.css';


const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello I am {props.name}, I am {props.age} years old</p>
    </div>
  )
}


function App() {
  

   const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <>
    <main>
      <Hello name={friends[0].name} age={friends[0].age}  />
      <Hello name={friends[1].name} age={friends[1].age}  />
    </main>
    </>
    
  )
}

export default App
