import React from 'react'

export const About = () => {
  return (
    <div className="container alert alert-primary">
        This is an about component
        <p>
          <ul>
            <li>Using this website you can save your daily tasks</li>
            <li>Your task will be saved until you don't delete them by yourself</li>
            <li>This site uses React Router.</li>
          </ul>
        </p>
    </div>
  )
}
