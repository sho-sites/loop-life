import Image from "next/image";
import sixbracelets from "../images/sixbracelets.png";
import threebracelets from "../images/threebracelets.png";
import twobraceletsonhand from "../images/twobraceletsonhand.png";

export default function Impact() {
  return (
    <div className="impact">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Your Impact</span>
            <h1>Every bracelet fuels the movement.</h1>
          </div>
          <p className="lead">
            Every bracelet you buy helps bridge the gap in financial education. Your support allows
            us to donate to the Young Investors Society, an organization that empowers students with
            real-world money skills, from budgeting to investing.
          </p>
          <p>
            But your impact does not stop there. By following our Instagram @loop_life13 and
            reposting our content, you help spread awareness and start important conversations about
            financial literacy. One share could inspire someone to take their first step toward
            financial freedom.
          </p>
          <p>
            You are not just wearing a bracelet. You are fueling a movement. Thank you for being
            part of the change.
          </p>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Bracelet gallery</span>
            <h2>Three loops. Three stories.</h2>
            <p className="muted" style={{ margin: 0 }}>
              Explore a few moments from the collection. Each bracelet is made to spark real
              conversations about financial literacy.
            </p>
          </div>

          <div className="bracelet-gallery" aria-label="Bracelet gallery">
            <figure className="bracelet-tile bracelet-feature">
              <Image
                src={sixbracelets}
                alt="Six bracelets laid out"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 46vw"
                style={{ objectFit: "cover" }}
                priority
              />
              <figcaption className="bracelet-caption">Made for the mission</figcaption>
            </figure>

            <figure className="bracelet-tile bracelet-side-tile">
              <Image
                src={threebracelets}
                alt="Three bracelets"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <figcaption className="bracelet-caption">Small loops, big impact</figcaption>
            </figure>

            <figure className="bracelet-tile bracelet-side-short-tile">
              <Image
                src={twobraceletsonhand}
                alt="Two bracelets on a hand"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <figcaption className="bracelet-caption">Wear the change</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
