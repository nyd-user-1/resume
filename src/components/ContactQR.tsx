import QRCode from "qrcode";
import { Column, Heading, Line, Row, Text } from "@once-ui-system/core";
import { person } from "@/resources";
import styles from "./ContactQR.module.scss";

const CONTACT_EMAIL = "brendan@nysgpt.com";

const vCard = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Stanton;Brendan;;;",
  `FN:${person.name}`,
  `EMAIL;TYPE=INTERNET:${CONTACT_EMAIL}`,
  "END:VCARD",
].join("\r\n");

const QUIET_ZONE = 2;

function buildQR() {
  // High error correction leaves headroom for the monogram covering the center
  const { modules } = QRCode.create(vCard, { errorCorrectionLevel: "H" });
  const size = modules.size;
  let path = "";
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (modules.get(row, col)) {
        path += `M${col + QUIET_ZONE} ${row + QUIET_ZONE}h1v1h-1z`;
      }
    }
  }
  return { path, viewBox: size + QUIET_ZONE * 2 };
}

export const ContactQR = () => {
  const { path, viewBox } = buildQR();

  return (
    <Column fillWidth gap="24" marginBottom="m">
      <Row fillWidth paddingRight="64">
        <Line maxWidth={48} />
      </Row>
      <Row
        fillWidth
        gap="40"
        paddingX="20"
        paddingY="24"
        vertical="center"
        s={{ direction: "column", horizontal: "center", align: "center" }}
      >
        <Column flex={3} gap="12" paddingLeft="l" s={{ paddingLeft: "0" }}>
          <Text variant="label-default-s" onBackground="neutral-weak" className={styles.kicker}>
            Contact
          </Text>
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Take my card with you
          </Heading>
          <Text wrap="balance" variant="body-default-l" onBackground="neutral-weak">
            Point your iPhone camera at the code and {person.firstName}&apos;s contact card saves
            straight to your phone.
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {person.name} · {CONTACT_EMAIL}
          </Text>
        </Column>
        <Row flex={2} horizontal="center">
          <a
            className={styles.tile}
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label={`QR code — scan to save ${person.name}'s contact card`}
          >
            <span className={styles.frame}>
              <svg
                className={styles.code}
                viewBox={`0 0 ${viewBox} ${viewBox}`}
                shapeRendering="crispEdges"
                role="img"
                aria-hidden="true"
              >
                <path d={path} fill="currentColor" />
              </svg>
              <span className={styles.monogram} aria-hidden="true">
                BS
              </span>
            </span>
            <span className={styles.caption}>Scan to save contact</span>
          </a>
        </Row>
      </Row>
      <Row fillWidth paddingLeft="64" horizontal="end">
        <Line maxWidth={48} />
      </Row>
    </Column>
  );
};
