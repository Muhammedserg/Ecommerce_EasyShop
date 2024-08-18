import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Refund = () => {
  return (
    <Fragment>
      <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
            <h4 className="section-title-login">Refund Policy</h4>
            <p className="section-title-contact">
              Bei EasyShop ist Ihre Zufriedenheit unser oberstes Ziel. Wenn Sie aus irgendeinem Grund mit Ihrem Kauf nicht vollständig zufrieden sind, bieten wir eine unkomplizierte Rückgabe- und Rückerstattungsrichtlinie an.
            </p>

            <h5>1. Rückgabefrist</h5>
            <p className="section-title-contact">
              Sie haben das Recht, innerhalb von 30 Tagen nach Erhalt der Ware eine Rückgabe zu veranlassen. Bitte stellen Sie sicher, dass die Produkte unbenutzt und in ihrem ursprünglichen Zustand sind.
            </p>

            <h5>2. Rückgabeprozess</h5>
            <p className="section-title-contact">
              Um eine Rückgabe zu initiieren, kontaktieren Sie bitte unseren Kundensupport unter <a href="mailto:Support@easyShop.com">Support@easyShop.com</a>. Geben Sie dabei Ihre Bestellnummer und den Grund für die Rückgabe an. Unser Team wird Ihnen weitere Anweisungen zur Rücksendung geben.
            </p>

            <h5>3. Rücksendekosten</h5>
            <p className="section-title-contact">
              Die Rücksendekosten trägt der Käufer, es sei denn, die Ware ist defekt oder es wurde ein falscher Artikel geliefert. In solchen Fällen übernehmen wir die Rücksendekosten.
            </p>

            <h5>4. Rückerstattungen</h5>
            <p className="section-title-contact">
              Sobald wir Ihre Rücksendung erhalten und geprüft haben, werden wir Sie per E-Mail über den Status Ihrer Rückerstattung informieren. Bei Genehmigung wird Ihre Rückerstattung innerhalb von 7-10 Werktagen bearbeitet und der Betrag wird auf die ursprüngliche Zahlungsmethode zurückerstattet.
            </p>

            <h5>5. Ausnahmen</h5>
            <p className="section-title-contact">
              Einige Artikel sind von der Rückgabe ausgeschlossen, darunter:
            </p>
            <ul>
              <li>Personalisierte Produkte</li>
              <li>Gebrauchte oder beschädigte Artikel</li>
              <li>Geschenkkarten</li>
            </ul>

            <h5>6. Kontakt</h5>
            <p className="section-title-contact">
              Wenn Sie Fragen zu unserer Rückgabepolitik haben, kontaktieren Sie uns bitte unter:<br />
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

export default Refund;
