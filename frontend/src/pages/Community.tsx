import DiscordBanner from "../components/DiscordBanner";
import { TfiAnnouncement } from "react-icons/tfi";
import { LuSprout } from "react-icons/lu";
import { RiNotification4Line } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import DiscordButton from "../components/DiscordButton";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import StatusLight from "../components/StatusLight";

const Community = () => {
  const [ambassadorStatus, setAmbassadorStatus] = useState<
    "open" | "reviewing" | "closed"
  >("open");

  const [mentorStatus, setMentorStatus] = useState<
    "open" | "reviewing" | "closed"
  >("open");

  const [announcement, setAnnouncement] = useState<string>("");
  const [announcementLink, setAnnouncementLink] = useState<string>("");
  const [postedDate, setPostedDate] = useState<string>("");

  useEffect(() => {
    async function fetchAnnouncement() {
      const { data } = await supabase
        .from("community_announcements")
        .select("announcement, announcement_link, date_posted")
        .eq("id", "326ec86a-9e2d-4b4a-a2ad-77899b6793c6")
        .single();

      if (data) {
        setAnnouncement(data.announcement);
        setAnnouncementLink(data.announcement_link);
        setPostedDate(data.date_posted);
      }
    }

    fetchAnnouncement();
  }, []);

  useEffect(() => {
    async function fetchStatuses() {
      const { data: ambassadorData } = await supabase
        .from("ambassador_application_status")
        .select("status")
        .eq("id", "57c0bd8e-5913-45cf-ae7d-83803a71f93f")
        .single();

      if (ambassadorData?.status) {
        setAmbassadorStatus(ambassadorData.status);
      }

      const { data: mentorData } = await supabase
        .from("mentor_application_status")
        .select("status")
        .eq("id", "dcd2b60a-0734-4faa-b2c0-0228dc77fb16")
        .single();

      if (mentorData?.status) {
        setMentorStatus(mentorData.status);
      }
    }

    fetchStatuses();
  }, []);

  return (
    <section className="text-fog bg-cream">
      <section className="py-16 px-6 space-y-24 tracking-wide">
        {/* === Featured Announcement === */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 justify-center">
            <TfiAnnouncement size={36} className="text-fog" />
            <h2 className="text-4xl font-teachers text-center">
              Community Announcements
            </h2>
          </div>
          <div className="border-fog border-2 bg-cream text-fog p-8 rounded-xl shadow-lg font-teachers text-lg leading-relaxed mt-8">
            <div className="text-left px-4 font-semibold tracking-widest">
              date posted: {postedDate
                ? new Date(postedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).toLowerCase()
                : "—"}

            </div>

            <hr className="my-4 border-t-2 border-fog" />

            <div className="px-4 text-left tracking-wide">
              {announcement || "No announcement posted yet."}
            </div>

            {announcementLink && (
              <div className="px-4 py-2 inline-block rounded-full border-cream border-2 bg-laurel text-cream hover:border-laurel hover:bg-cream hover:text-laurel mt-6 tracking-wide">
                <a href={announcementLink}>Learn more</a>
              </div>
            )}
          </div>

        </div>
      </section>

      <section className="flex flex-col py-12 tracking-wide bg-cream text-fog px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16 flex flex-col items-center gap-6">
            <h1 className="text-4xl font-teachers text-center">grow with us</h1>
            <p className="w-2/3 font-teachers text-xl text-center">
              our discord community is a vibrant online space for growth.
            </p>
            <DiscordButton />
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {/* Resources */}
            <div className="shadow-md mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col">
              <LuSprout size={48} />
              <h1 className="mt-4 text-xl font-semibold">exclusive resources</h1>
              <p className="pt-6">access unique tools available only at GenTalks</p>
              <div className="hover:text-laurel underline mt-4">
                <a href="/resources">view resources</a>
              </div>
            </div>

            {/* Notifications */}
            <div className="shadow-md mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col">
              <RiNotification4Line size={48} />
              <h1 className="mt-4 text-xl font-semibold">access community events</h1>
              <p className="pt-6">get real time updates and access our events!</p>
            </div>

            {/* Mentorship */}
            <div className="shadow-md mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col">
              <FaChalkboardTeacher size={48} />
              <h1 className="mt-4 text-xl font-semibold">mentorship program</h1>
              <p className="mt-4">access guidance from peers and alumni.</p>
              <div className="hover:text-laurel underline mt-4">
                <a href="/book-a-mentor">book a mentor</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Student Ambassador Program === */}
      <section className="bg-cream text-fog w-full flex flex-col items-center py-8 space-y-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="pl-8 w-full lg:w-1/2">
            <h1 className="font-semibold font-teachers text-4xl text-center">
              student ambassador program
            </h1>

            <div className="space-y-4 text-center font-teachers my-8">
              <StatusLight status={ambassadorStatus} />
            </div>

            <ul className="list-disc list-inside text-center font-teachers text-xl my-8"> <li>Represent GenTalks in your school or community</li> <li>Share the space with others who might benefit</li> <li>Dedicate 2-3 hours per month (projects & communication)</li> <li>Spread awareness gently (word of mouth, social shares)</li> <li>Share what high schoolers really want and need</li> </ul>

            {ambassadorStatus === "open" && (
              <div className="space-y-4 text-center font-teachers gap-8">
                <div className="text-xl inline-block px-4 py-2 border-cream border-2 hover:border-laurel rounded-full bg-laurel text-cream hover:bg-cream hover:text-laurel">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdIpOiUV_nKq48-ifvL--rmpPAWVplYJ5Ux57auAAR43GEdmQ/viewform">
                    apply here!
                  </a>
                </div>
              </div>
            )}
          </div>

          <img
            src="https://i.imgur.com/n19WXEh.png"
            alt="matcha"
            className="pr-8 w-full lg:w-1/2 rounded-xl shadow-lg mt-4 lg:mt-0"
          />
        </div>

        {/* === Mentor Program === */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between mt-16">
          <div className="pr-8 w-full lg:w-1/2">
            <h1 className="text-4xl font-semibold font-teachers text-center">
              mentor program
            </h1>

            <div className="space-y-4 text-center font-teachers my-8">
              <StatusLight status={mentorStatus} />
            </div>

            <ul className="list-disc list-inside text-center font-teachers text-xl my-8"> <li>Share your insights regarding academia or industry work</li> <li>Help high school students navigate the difficulty of college applications</li> </ul>

            {mentorStatus === "open" && (
              <div className="space-y-4 text-center font-teachers gap-8">
                <div className="text-xl inline-block px-4 py-2 border-cream border-2 hover:border-laurel rounded-full bg-laurel text-cream hover:bg-cream hover:text-laurel">
                  <a href="https://forms.gle/QBcK4JY6c4W69Sh19">apply here!</a>
                </div>
              </div>
            )}
          </div>

          <img
            src="https://i.imgur.com/n19WXEh.png"
            alt="matcha"
            className="pl-8 w-full lg:w-1/2 rounded-xl shadow-lg mt-4 lg:mt-0"
          />
        </div>
      </section>

      <section className="relative w-full overflow-hidden py-20 px-8 bg-cream">
        <DiscordBanner />
      </section>
    </section>
  );
};

export default Community;
