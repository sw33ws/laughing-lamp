import React from 'react';

export default function Contact() {
  return (
    <div className='backgroundColor Spacing'>
      <h1>Contact</h1>
      
      <div>
        <form className='needs-validation'>

          <div class="form-group">
            <label for="Name">Name:</label>
            <input type="text" class="form-control" id="Name" placeholder="Enter your first and last name"></input>
          </div>

          <div class="form-group">
            <label for="Email">Email address:</label>
            <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter your email"></input>
          </div>

          <div class="form-group">
            <label for="Message">Message:</label>
            <textarea class="form-control" id="Message" rows="3"></textarea>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>

        </form>
      </div>
    </div>
  );
}
