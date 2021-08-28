/*****************!IMPORTANT********************
The parent of this 'divEl' must be an 'Element' with the class '.contact'.
Because '.contact' has the 'CSS Properties' that contain everything.
*/

const contactComponent = (contactEl) => {
  let divEl = document.createElement("div");

  divEl.innerHTML = `
    <div class="contact__container">
      <h2 class="contact__title">Contacto</h2>
  
      <form class="contact-form">
        <!--Contact-Form__Name-->
        <label class="contact-form__group">
          <span class="contact-form__span">NOMBRE</span>
          <input type="text" class="contact-form__input" />
        </label>
  
        <!--Contact-Form__Email-->
        <label class="contact-form__group">
          <span class="contact-form__span">EMAIL</span>
          <input type="email" class="contact-form__input" />
        </label>
  
        <!--Contact-Form__Message-->
        <label class="contact-form__group">
          <span class="contact-form__span">MENSAJE</span>
          <textarea class="contact-form__textarea"></textarea>
        </label>
  
        <button class="contact-form__button">Enviar</button>
      </form>
    </div>
  `;
  contactEl.appendChild(divEl);
};
