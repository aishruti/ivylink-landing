const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-lg font-semibold text-foreground">
            LocalCollab
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LocalCollab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;