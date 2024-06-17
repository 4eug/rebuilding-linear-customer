import classNames from "classnames";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <h1
      className={classNames(
        "my-3 text-7xl md:text-8xl",
        className
      )}
    >
      {children}
    </h1>
  );
};


export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return (
    <p
      className={classNames(
        "mb-12 mx-8 text-lg text-primary-text md:text-xl",
        className
      )}
    >
      {children}
    </p>
  );
};

export const HeroIndicator = ({ children, className }: HeroElementProps) => {
  return (
    <p
      className={classNames(
        "text-md text-gradient md:text-lg",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center pt-28 lg:pt-56">{children}</div>;
};
