import { Button, Link } from "@nextui-org/react";

export const HomeHeroActions = () => {
  return (
    <div className="flex gap-4">
      <Button isExternal href="https://www.linkedin.com/in/brunomartinezgonza/" as={Link} color="default">
        Linkedin Profile
      </Button>
      <Button href="/megaverse" as={Link} color="success">
        Megaverse
      </Button>
    </div>
  );
};
