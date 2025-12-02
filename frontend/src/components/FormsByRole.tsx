import CommunityAnnouncementForm from "../forms/CommunityAnnouncementForm";
import ScholarshipsForm from "../forms/ScholarshipsForm";
import InternshipsForm from "../forms/InternshipsForm";
import HTAForm from "../forms/HTAForm";
import MentorCardForm from "../forms/MentorCardForm";
import AAplicationStatusForm from "../forms/AApplicationStatusForm";
import BlogForm from "../forms/BlogForm";
import CPForm from "../forms/CPForm";
import MApplicationStatusForm from "../forms/MApplicationStatusForm";
import NHSForm from "../forms/NHSForm";
import SRForm from "../forms/SRForm";
import StudentCenterAnnouncementsForm from "../forms/StudentCenterAnnouncementsForm";
import StudentProjectsForm from "../forms/StudentProjectsForm";
import StudentStoriesForm from "../forms/StudentStoriesForm";
import HomeStatisticsForm from "../forms/HomeStatisticsForm";

type Props = {
    role: string;
    biography: string;
};

export function FormsByRole({ role, biography }: Props) {
    const formsByRole: Record<string, React.ReactNode[]> = {
        developer: [
            <AAplicationStatusForm />,
            <BlogForm />,
            <CPForm />,
            <CommunityAnnouncementForm />,
            <HTAForm />,
            <HomeStatisticsForm />,
            <InternshipsForm />,
            <MApplicationStatusForm />,
            <MentorCardForm />,
            <NHSForm />,
            <ScholarshipsForm />,
            <StudentCenterAnnouncementsForm />,
            <StudentProjectsForm />,
            <SRForm />,
            <StudentStoriesForm />
        ],
        manager: [
            <AAplicationStatusForm />,
            <BlogForm />,
            <CPForm />,
            <CommunityAnnouncementForm />,
            <HTAForm />,
            <InternshipsForm />,
            <HomeStatisticsForm />,

            <MApplicationStatusForm />,
            <MentorCardForm />,
            <NHSForm />,
            <ScholarshipsForm />,
            <StudentCenterAnnouncementsForm />,
            <StudentProjectsForm />,
            <SRForm />,
            <StudentStoriesForm />

        ],
        creative: [
            <BlogForm />,
            <CPForm />,
            <CommunityAnnouncementForm />,
            <InternshipsForm />,
            <HTAForm />,
            <NHSForm />,
            <ScholarshipsForm />,
            <StudentCenterAnnouncementsForm />,
            <StudentProjectsForm />,
            <HomeStatisticsForm />,

            <SRForm />,
            <StudentStoriesForm />
        ],
        mentor: [
            <BlogForm />,
            <CPForm />,
            <HTAForm />,
            <InternshipsForm />,
            <MentorCardForm />,
            <HomeStatisticsForm />,

            <NHSForm />,
            <ScholarshipsForm />,
            <SRForm />,
        ],
        ambassador: [
            <BlogForm />,
            <NHSForm />,
            <StudentCenterAnnouncementsForm />,
            <StudentProjectsForm />,
            <HomeStatisticsForm />,

            <SRForm />,
            <StudentStoriesForm />
        ],
        unknown: [<p>No permissions found.</p>]
    };

    const forms = formsByRole[role] || formsByRole["unknown"];

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Available Forms for Your Role: {biography}</h2>

            <div className="space-y-6">
                {forms.map((formComponent, index) => (
                    <div key={index}>{formComponent}</div>
                ))}
            </div>
        </div>
    );
}
