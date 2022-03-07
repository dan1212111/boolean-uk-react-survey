import AnswersItem from "./AnswersItem"

export function AnswersList(props) {
  console.log("Inside AnswersList: ", props)

  const { answersList } = props
  console.log(props)

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  )
}
