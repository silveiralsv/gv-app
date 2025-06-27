import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type ActivitiesCardProps = {
  title: string;
  description: string;
  onClick?: () => void;
};

export default function ActivitiesCard({
  title,
  description,
  onClick,
}: ActivitiesCardProps) {
  return (
    <Card
      onClick={onClick}
      className="items-center flex flex-col max-w-sm md:max-w-md text-center cursor-pointer"
    >
      <CardHeader>
        <CardTitle className="flex flex-col items-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
