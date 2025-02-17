import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type ActivitiesCardProps = {
  title: string;
  description: string;
};

export default function ActivitiesCard({
  title,
  description,
}: ActivitiesCardProps) {
  return (
    <Card className="items-center flex flex-col max-w-sm md:max-w-md text-center">
      <CardHeader>
        <CardTitle className="flex flex-col items-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
