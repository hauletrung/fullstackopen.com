import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const App = () => {
  const course = "Half Stack application development";
  const contents = [
    {title: "Fundamentals of React", exercises: 10},
    {title: "Using props to pass data", exercises: 7},
    {title: "State of a component", exercises: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content title={contents[0].title} exercises={contents[0].exercises} />
      <Content title={contents[1].title} exercises={contents[1].exercises} />
      <Content title={contents[2].title} exercises={contents[2].exercises} />
      <Total exercises={contents[0].exercises + contents[1].exercises + contents[2].exercises} />
    </div>
  )
}

export default App;