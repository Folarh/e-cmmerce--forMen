import "./Contact.css"

export default function Contact() {
  return (
    <div className='contact'>
        <h1>Contact Us</h1>
        <form>
          <input type="text" placeholder="Enter your name"/>
          <input type="text" placeholder="Enter your Email"/>
          <textarea placeholder="Leave a message"/>
          {/* <button>Submit</button> */}
        </form>

    </div>
  )
}
