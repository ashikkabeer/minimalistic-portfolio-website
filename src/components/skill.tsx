import { Separator } from "@/components/ui/separator";
import { GitCompareArrows } from "lucide-react";
export function Skills() {
  return (
    <div>
      <div className="space-y-1">
        <div className="flex">
          <div className="flex flex-col">
            <p className="text-sm font-medium leading-none">Skills</p>
            <p className="text-sm text-muted-foreground">Tools and Languages</p>
          </div>
          <div></div>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>NodeJS</div>
        <Separator orientation="vertical" />
        <div>ExpressJS</div>
        <Separator orientation="vertical" />
        <div>NestJS</div>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>MongoDB</div>
        <Separator orientation="vertical" />
        <div>SQL</div>
        <Separator orientation="vertical" />
        <div>Redis</div>
        <Separator orientation="vertical" />
        <div>Prisma</div>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Docker</div>
        <Separator orientation="vertical" />
        <div>Linux</div>
        <Separator orientation="vertical" />
        <div>Google Cloud</div>
        <Separator orientation="vertical" />
        <div>Jest</div>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Javascript</div>
        <Separator orientation="vertical" />
        <div>Java</div>
        <Separator orientation="vertical" />
        <div className="dark:bg-[#007acc] light:text-sky-600">Typescript</div>
        <Separator orientation="vertical" />
        <p>GoLang</p>
      </div>
    </div>
  );
}
