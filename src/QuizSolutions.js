import {Component} from 'react'

export default class QuizSolutions extends Component{
constructor(props){
  super(props)
}
viewQuizSolutionsHeading = () => {
    if (this.props.currentItemIndex ===(this.props.combinedSelection.length) && this.props.currentItemIndex>0){
      return (
        <h1>
          View Solutions
          </h1>)}
  }
  viewQuizSolutions = () => {
    if (this.props.currentItemIndex === this.props.combinedSelection.length){
    return (
      this.props.combinedSelection.map((q) =>
        <div>
          <p> {q.question} </p>
          <p> {q.correct_answer} </p>
        </div>))}}
  
render() {
  return(
    <div>
        <div>{this.viewQuizSolutionsHeading()}</div>
        <div>{this.viewQuizSolutions()}</div>
    </div>
  )
}}
