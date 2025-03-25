const Header = (props) => {
    return (
      <>
        <h1>{props.name}</h1>
      </>
    )
  }
  
  const Part = ({part}) => {
    return (
      <p>{part.name} {part.exercises}</p>
    )
  }
  
  const Content = (props) => {
    return (
      <>
        {
          props.parts.map(element => <Part key={element.id} part={element}/>)
        }
      </>
    )
  }
  
  const Total = ({parts}) => {
    const total = parts.reduce((sum, cur) => {
      return sum + cur.exercises
    }, 0)
    return (
      <>
        <p>
          <strong>Number of exercises {total}</strong>
        </p>
      </>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

  export default Course