import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function CardDefault({img}) {
    return (
      <Card className="my-10 mx-10 w-96 inline-block hover:scale-110" >
        <CardHeader color="blue-gray" className="relative h-56 ">
          <img
            src={img}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
           
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="text-black">Read More</Button>
        </CardFooter>
      </Card>
    );
  }

  