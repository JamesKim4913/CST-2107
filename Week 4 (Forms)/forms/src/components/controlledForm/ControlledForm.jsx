import styles from './ControlledForm.module.css';

export default function ControlledForm() {
  const handleSubmitForm = () => {
    console.log('called on submit');
  }  

  return (
    <>
    <form className={styles.formContainer} onSubmit={handleSubmitForm}>
        <div className={styles.formControl}>
            <label htmlFor=""></label>
        </div>
    </form>
    </>
  )
}
