const Header = ({name}) => {
    return (
      <>
        <h1>{name}</h1>
      </>
    )
  }
  
  const Part = ({part}) => {
    return (
      <p>{part.name} {part.exercises}</p>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <>
        {
          parts.map(element => <Part key={element.id} part={element}/>)
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
          <strong>total of {total} exercises</strong>
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