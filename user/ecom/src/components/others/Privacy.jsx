import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Privacy extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <h4 className="section-title-login">Privacy Page</h4>
              <p className="section-title-contact">
                Willkommen bei EasyShop! Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. In dieser Datenschutzerklärung erfahren Sie, wie wir Ihre Daten erheben, verwenden und schützen.
              </p>
              <h5>1. Verantwortlicher</h5>
              <p className="section-title-contact">
                Verantwortlicher für die Datenverarbeitung auf dieser Webseite ist:<br />
               <p>Muhammed Serg</p>  <br />
                Office Address: 45479, Mülheim an der Ruhr, AL 36104<br />
                E-Mail: <a href="mailto:Support@easyShop.com">Support@easyShop.com</a>
              </p>

              <h5>2. Erhebung und Verarbeitung personenbezogener Daten</h5>
              <p className="section-title-contact">
                Wir erheben und verarbeiten Ihre personenbezogenen Daten ausschließlich im Rahmen der gesetzlichen Bestimmungen. Zu den personenbezogenen Daten gehören alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.
              </p>

              <h5>3. Datenerhebung beim Besuch unserer Webseite</h5>
              <p className="section-title-contact">
                Beim Besuch unserer Webseite speichern unsere Server automatisch verschiedene Informationen, die Ihr Browser übermittelt, um Ihnen die Nutzung der Seite zu ermöglichen. Dies umfasst:
              </p>
              <ul>
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>URL der abgerufenen Datei</li>
                <li>Browsertyp und -version</li>
                <li>Betriebssystem</li>
              </ul>

              <h5>4. Verwendung von Cookies</h5>
              <p className="section-title-contact">
                Unsere Webseite verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern und bestimmte Funktionen zu ermöglichen. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Sie können die Verwendung von Cookies in den Einstellungen Ihres Browsers deaktivieren, was jedoch die Funktionalität der Webseite beeinträchtigen kann.
              </p>

              <h5>5. Kontaktformular</h5>
              <p className="section-title-contact">
                Wenn Sie uns über unser Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h5>6. Nutzung Ihrer Daten zur Bestellabwicklung</h5>
              <p className="section-title-contact">
                Zur Abwicklung Ihrer Bestellung erheben und verwenden wir Ihre personenbezogenen Daten nur, soweit dies zur Erfüllung und Abwicklung Ihrer Bestellung sowie zur Bearbeitung Ihrer Anfragen erforderlich ist.
              </p>

              <h5>7. Weitergabe personenbezogener Daten</h5>
              <p className="section-title-contact">
                Eine Weitergabe Ihrer Daten erfolgt nur, wenn dies zur Vertragsabwicklung erforderlich ist, z.B. an das mit der Lieferung beauftragte Versandunternehmen oder das mit der Zahlungsabwicklung beauftragte Kreditinstitut. Eine weitergehende Übermittlung Ihrer Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich zugestimmt haben.
              </p>

              <h5>8. Ihre Rechte</h5>
              <p className="section-title-contact">
                Sie haben das Recht:
              </p>
              <ul>
                <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten</li>
                <li>Berichtigung unrichtiger Daten zu verlangen</li>
                <li>Löschung Ihrer Daten zu verlangen, sofern dies gesetzlich zulässig ist</li>
                <li>Einschränkung der Datenverarbeitung zu verlangen</li>
                <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen</li>
                <li>Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten</li>
              </ul>

              <h5>9. Datensicherheit</h5>
              <p className="section-title-contact">
                Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre durch uns verwalteten Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.
              </p>

              <h5>10. Änderungen dieser Datenschutzerklärung</h5>
              <p className="section-title-contact">
                Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>

              <h5>11. Kontakt</h5>
              <p className="section-title-contact">
                Wenn Sie Fragen oder Anmerkungen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter:<br />
                Muhammed Serg<br />
                Office Address: 45479, Mülheim an der Ruhr, AL 36104<br />
                E-Mail: <a href="mailto:Support@easyShop.com">Support@easyShop.com</a>
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Privacy;
