import './App.css';


const Hello = (props) => {
  const {name, age} = props;
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  }
  return (
    <div>
      <p>Hello I am {name}, I am {age} years old</p>
      <p>I was born in year {bornYear()}</p>
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
