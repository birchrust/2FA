import React from "react";
import { Card } from "~/components/Card";
import RootLayout from "~/layouts/Layout";
import config from "config.json";

export default function Home() {
  const [time, setTime] = React.useState<number>();
  const authenticationArray = config.config.slice(2, 13);

  React.useEffect(() => {
    const seconds = new Date().getSeconds();
    setTime(seconds > 30 ? Math.abs(60 - seconds) : Math.abs(30 - seconds));
  }, []);

  return (
    <RootLayout>
      {authenticationArray?.map((item) =>
        item.options[1]?.value ? (
          <Card
            time={time!}
            key={item.name}
            secret={item.options[1]?.value}
            issuer={item.options[0]!.value}
          >
            <span>{item.options[0]!.value}</span>
          </Card>
        ) : null
      )}
    </RootLayout>
  );
}
