import { useState } from "react"
import { AnswersList } from "./AnswersList"

function Main() {
  const [open, setOpen] = useState(false) //Ignore this state
  const [rateDuckColor, setRateDuckColor] = useState("")
  const [duckTime, setDuckTime] = useState([
    { activity: "swimming", checked: false },
    { activity: "bathing", checked: false },
    { activity: "chatting", checked: false },
    { activity: "noTime", checked: false },
  ])
  const [extraComment, setExtraComment] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [submit, setSubmit] = useState(
    {
      rateDuckColor: "",
      duckTime: "",
      extraComment: "",
      name: "",
      email: "",
    },
)

  function handelRateDuckColor(event) {
    const inputValue = event.target.value
    setRateDuckColor(inputValue)
    console.log(rateDuckColor)
  }

  function handleExtraComment(event) {
    const inputValue = event.target.value
    setExtraComment(inputValue)
  }

  function handleName(event) {
    const inputValue = event.target.value
    setName(inputValue)
  }

  function handleEmail(event) {
    const inputValue = event.target.value
    setEmail(inputValue)
  }

  function handleDuckTime(event) {
    const inputValue = event.target.value
    const isChecked = event.target.checked
    const dTime = [...duckTime]
    for (let duck of dTime) {
      if (inputValue === duck.activity) {
        duck.checked = !duck.checked
        setDuckTime(dTime)
      }
    }
    console.log(duckTime)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const userData = { rateDuckColor, duckTime, extraComment, name, email }

    setSubmit(userData)
    console.log("FORM:", { userData })
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answerItem={submit} />
      </section>
      <section className="main__form" onSubmit={handleSubmit}>
        <form class="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div class="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={handelRateDuckColor}
                  checked={rateDuckColor === "1"}
                />
                <label for="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={handelRateDuckColor}
                  checked={rateDuckColor === "2"}
                />
                <label for="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={handelRateDuckColor}
                  checked={rateDuckColor === "3"}
                />
                <label for="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={handelRateDuckColor}
                  checked={rateDuckColor === "4"}
                />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>
          <div class="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* <!-- checkboxes go here --> */}
            <ul onChange={handleDuckTime}>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="swimming" />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="bathing" />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="chatting" />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="noTime" />I
                  don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={handleExtraComment}
              value={extraComment}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value=""
              onChange={handleName}
              value={name}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value=""
              onChange={handleEmail}
              value={email}
            />
          </label>
          <input class="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  )
}

export default Main
