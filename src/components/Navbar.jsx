import React, { useContext, useEffect } from "react";
import { Moon, Sun, CircleUser, Menu, CarTaxiFrontIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Web3Context } from "../context/web3Context";
import { createUser } from "../integration/scripts.js";
import Meteors from "./ui/meteor";

const Navbar = ({ setTheme }) => {
  const { web3, address, initializeWeb3, isVerified, setIsVerified, contractInstance } = useContext(Web3Context);

  const handleRegisterUser = async () => {
    try {
      if (web3 === null) {
        return;
      }
      createUser(contractInstance).then(() => {
        setIsVerified(true);
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!web3) {
      initializeWeb3();
    }
  }, [web3, initializeWeb3]);

  return (
    <header className="relative overflow-hidden top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Meteors number={40} />
      <nav className="hidden flex-col gap-6 text-3xl font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <a href="/temp" className="text-sm font-medium hover:underline underline-offset-4">
          <CarTaxiFrontIcon className="h-6 w-6" />
          <div className="sr-only">RideCrypt</div>
        </a>
        <a
          href="/"
          className="text-muted-foreground transition-colors hover:text-foreground text-sm font-medium hover:underline underline-offset-4"
        >
          About
        </a>
        <a
          href="/book"
          className="text-muted-foreground transition-colors hover:text-foreground text-sm font-medium hover:underline underline-offset-4"
        >
          Book
        </a>
        <a
          href="/offer"
          className="text-muted-foreground transition-colors hover:text-foreground text-sm font-medium hover:underline underline-offset-4"
        >
          Offer
        </a>
        <a
          href="/working"
          className="text-muted-foreground transition-colors hover:text-foreground text-sm font-medium hover:underline underline-offset-4"
        >
          Working
        </a>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <a href="#" className="flex items-center gap-2 text-lg font-semibold">
              <CarTaxiFrontIcon className="h-6 w-6" />
              <div className="sr-only">RideCrypt</div>
            </a>
            <a href="/" className="text-muted-foreground hover:text-foreground">
              About
            </a>
            <a href="/book" className="text-muted-foreground hover:text-foreground">
              Book
            </a>
            <a href="/offer" className="text-muted-foreground hover:text-foreground">
              Offer
            </a>
            <a href="/working" className="text-muted-foreground hover:text-foreground">
              Working
            </a>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex gap-2 sm:flex-initial">
          <div>
            {isVerified ? (
              <Button variant="secondary" className="rounded-full">
                {address}
              </Button>
            ) : (
              <Button variant="secondary" className="rounded-full" onClick={handleRegisterUser}>
                Register
              </Button>
            )}
          </div>
          <div>
            {web3 !== null ? (
              <Button variant="secondary" className="rounded-full">
                Connected to Metamask
              </Button>
            ) : (
              <Button variant="secondary" className="rounded-full" onClick={initializeWeb3}>
                Connect to Metamask
              </Button>
            )}
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>My Profile</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
