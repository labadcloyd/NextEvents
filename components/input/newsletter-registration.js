import classes from './newsletter-registration.module.css';
import axios from 'axios'

function NewsletterRegistration() {
  function registrationHandler(event) {
    event.preventDefault();
    axios.post('/api/newsletterRegistration', {data:{email:event.target.email.value}}).then((response)=>{
      console.log(response)
    })
    
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;