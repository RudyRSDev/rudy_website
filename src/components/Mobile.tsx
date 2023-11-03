import Image from 'next/image';
import Link from 'next/link';
import { socials } from '@/content/socials';
import { IoWarning } from 'react-icons/io5';

export default function Mobile() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className=" mb-6 flex h-[95%] w-[90%] flex-col items-center overflow-auto rounded bg-black/40 backdrop-blur-lg">
        <div className="mt-6 w-4/5">
          <Image
            src="/images/etc/logo_wide.png"
            alt="Rudy"
            width={1342}
            height={578}
          />
        </div>

        <div className="my-6 flex flex-col justify-start gap-4 px-6">
          {/* Blizzcon */}
          <div className="flex max-w-lg flex-col text-xl text-white">
            <h1 className="font-medium">Blizzcon Friends!</h1>
            <h2 className="text-base font-light">Blizzard: RudySPG#1471</h2>
            <h2 className="text-base font-light">Discord: RudySPG</h2>
            <h2 className="text-base font-light">Steam: 111774315 or RudySPG</h2>
          </div>

          {/* Find Me */}
          <div className="flex flex-col text-xl text-white">
            <h1 className="font-medium">Find Me</h1>
            <div className="flex gap-4">
              {socials.map((social) => {
                const { id, name, icon, url, alt } = social;
                if (name !== 'X/Twitter')
                  return (
                    <Link
                      data-tip={name}
                      key={id}
                      href={url}
                      target="_blank"
                      className=""
                    >
                      <div className=" mt-2 text-3xl text-white transition-all duration-500 hover:opacity-50">
                        {icon}
                      </div>
                    </Link>
                  );
                return (
                  <Link
                    data-tip={name}
                    key={id}
                    href={url}
                    target="_blank"
                    className=""
                  >
                    <div className=" mt-2 text-3xl text-white transition-all duration-500 hover:opacity-50">
                      {alt}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* About Me */}
          <div className="flex max-w-lg flex-col text-xl text-white">
            <h1 className="font-medium">About Me</h1>
            <h2 className="text-base font-light">
              I have a strong background in both computer science and graphic
              design. I have been utilizing these skills for over eight years,
              both in my studies and in professional settings. I am particularly
              passionate about projects that merge these two fields.
            </h2>
          </div>

          {/* Resume */}
          <div className="text-white">
            <h1 className=" text-xl font-medium text-white">Resume</h1>
            <div className="flex gap-6 pt-1 text-white">
              <div>
                <h2 className="text-base font-light">Technical</h2>
                <div className="flex gap-2 pt-1">
                  <Link
                    href="/docs/r_sandoval_tech_resume_web.pdf"
                    target="_blank"
                    download="Sandoval Resume"
                  >
                    <button className="nav-btn whitespace-nowrap rounded bg-black/30 !px-4 !py-1 hover:bg-black/60">
                      <span className="text-base font-light">.pdf</span>
                    </button>
                  </Link>
                  <Link
                    href="/docs/r_sandoval_tech_resume_web.docx"
                    target="_blank"
                    download="Sandoval Resume"
                  >
                    <button className="nav-btn whitespace-nowrap rounded bg-black/30 !px-4 !py-1 hover:bg-black/60">
                      <span className="text-base font-light">.docx</span>
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="text-base font-light">Visual</h2>
                <div className="flex gap-2 pt-1">
                  <Link
                    href="/docs/r_sandoval_visual_resume_web.pdf"
                    target="_blank"
                    download="Sandoval Resume Visual"
                  >
                    <button className="nav-btn whitespace-nowrap rounded bg-black/30 !px-4 !py-1 hover:bg-black/60">
                      <span className="text-base font-light">.pdf</span>
                    </button>
                  </Link>
                  <Link
                    href="/docs/r_sandoval_visual_resume_web.docx"
                    target="_blank"
                    download="Sandoval Resume Visual"
                  >
                    <button className="nav-btn whitespace-nowrap rounded bg-black/30 !px-4 !py-1 hover:bg-black/60">
                      <span className="text-base font-light">.docx</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div>
            <div className="flex items-center text-white">
              <IoWarning className="text-xl" />
              <h1 className="text-xl font-medium"> Warning </h1>
            </div>
            <p className="text-white">
              Skills, Education, Projects can not be viewed on a mobile device
              feel free to download my resume or revisit on a desktop device.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
