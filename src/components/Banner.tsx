import styles from "./banner.module.css";
export default function Banner() {

  return (
    <section className={styles.banner}>
         <img
        src="/images/banner.webp"
        alt="Event venue banner"
        className={styles.backgroundImage}
      />
      <div className={styles.overlay}>
        <h1>where every event finds its venue</h1>

        <p>
          Discover the perfect venue for your special moments.
          We provide premium event spaces for weddings, meetings,
          celebrations, and corporate events with professional service.
        </p>

       
      </div>
    </section>
  );
}