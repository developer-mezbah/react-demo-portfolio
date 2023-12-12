import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
// import img3 from '../../assets/img3.jpg'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.aboutSection}>
        <div className={styles.aboutItem}>
            <div>
                <h1 className={styles.title}>Ephemeral Serenity</h1>
                <p>captures a fleeting moment of tranquil beauty, where nature and time seem to stand still. The scene unfolds in a secluded forest clearing bathed in the soft glow of dawns first light. Delicate morning mist hovers above the dew-kissed grass, creating an ethereal atmosphere. The silhouette of ancient trees embraces the serenity, their branches reaching towards the heavens like silent sentinels of time. A gentle stream meanders through the landscape, reflecting the pastel hues of the emerging sunrise. Birds, caught in mid-flight, add a sense of motion to the otherwise serene tableau. This image evokes a sense of calm and contemplation, inviting viewers to immerse themselves in the delicate balance between the temporal and the timeless.</p>
            </div>
            <div>
                <img src={img1} alt=""  className={styles.images}/>
            </div>
        </div>
        <div>
            <div className="title">
                <h1 className={styles.title}>Ephemeral Serenity</h1>
                <p>captures a fleeting moment of tranquil beauty, where nature and time seem to stand still. The scene unfolds in a secluded forest clearing bathed in the soft glow of dawns first light. Delicate morning mist hovers above the dew-kissed grass, creating an ethereal atmosphere. The silhouette of ancient trees embraces the serenity, their branches reaching towards the heavens like silent sentinels of time. A gentle stream meanders through the landscape, reflecting the pastel hues of the emerging sunrise. Birds, caught in mid-flight, add a sense of motion to the otherwise serene tableau. This image evokes a sense of calm and contemplation, inviting viewers to immerse themselves in the delicate balance between the temporal and the timeless.</p>
            </div>
            <div>
                <img src={img2} alt=""  className={styles.images}/>
            </div>
        </div>
    </div>
  )
}

export default About