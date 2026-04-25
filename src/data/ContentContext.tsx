import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  profile as defaultProfile,
  social as defaultSocial,
  experience as defaultExperience,
  projects as defaultProjects,
  education as defaultEducation,
  skills as defaultSkills,
  personalSettings as defaultPersonalSettings,
  photos as defaultPhotos,
  organizations as defaultOrganizations,
  music as defaultMusic,
  files as defaultFiles,
  notes as defaultNotes,
  contact as defaultContact,
} from "./content";

type Profile = typeof defaultProfile;
type Social = typeof defaultSocial;
type Experience = typeof defaultExperience;
type Projects = typeof defaultProjects;
type Education = typeof defaultEducation;
type Skills = typeof defaultSkills;
type PersonalSettings = typeof defaultPersonalSettings;
type Photos = typeof defaultPhotos;
type Organizations = typeof defaultOrganizations;
type Music = typeof defaultMusic;
type Files = typeof defaultFiles;
type Notes = typeof defaultNotes;
type Contact = typeof defaultContact;

interface ContentState {
  profile: Profile;
  social: Social;
  experience: Experience;
  projects: Projects;
  education: Education;
  skills: Skills;
  personalSettings: PersonalSettings;
  photos: Photos;
  organizations: Organizations;
  music: Music;
  files: Files;
  notes: Notes;
  contact: Contact;
}

interface ContentApi extends ContentState {
  setProfile: (next: Partial<Profile>) => void;
  setSocial: (next: Partial<Social>) => void;
  setNote: (id: string, next: Partial<Notes[number]>) => void;
  addNote: () => void;
  removeNote: (id: string) => void;
  setExperience: (id: string, next: Partial<Experience[number]>) => void;
  setEducation: (id: string, next: Partial<Education[number]>) => void;
  setFile: (id: string, next: Partial<Files[number]>) => void;
  setPhotoCaption: (id: string, caption: string) => void;
  resetAll: () => void;
}

const ContentContext = createContext<ContentApi | null>(null);

const initial: ContentState = {
  profile: defaultProfile,
  social: defaultSocial,
  experience: defaultExperience,
  projects: defaultProjects,
  education: defaultEducation,
  skills: defaultSkills,
  personalSettings: defaultPersonalSettings,
  photos: defaultPhotos,
  organizations: defaultOrganizations,
  music: defaultMusic,
  files: defaultFiles,
  notes: defaultNotes,
  contact: defaultContact,
};

export function ContentProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ContentState>(initial);

  const setProfile = useCallback((next: Partial<Profile>) => {
    setState((s) => ({ ...s, profile: { ...s.profile, ...next } }));
  }, []);

  const setSocial = useCallback((next: Partial<Social>) => {
    setState((s) => ({ ...s, social: { ...s.social, ...next } }));
  }, []);

  const setNote = useCallback((id: string, next: Partial<Notes[number]>) => {
    setState((s) => ({
      ...s,
      notes: s.notes.map((n) => (n.id === id ? { ...n, ...next } : n)),
    }));
  }, []);

  const addNote = useCallback(() => {
    setState((s) => ({
      ...s,
      notes: [
        ...s.notes,
        {
          id: `n${Date.now()}`,
          title: "[ New note ]",
          body: "[ Placeholder body — replace with your own writing. ]",
        },
      ],
    }));
  }, []);

  const removeNote = useCallback((id: string) => {
    setState((s) => ({ ...s, notes: s.notes.filter((n) => n.id !== id) }));
  }, []);

  const setExperience = useCallback(
    (id: string, next: Partial<Experience[number]>) => {
      setState((s) => ({
        ...s,
        experience: s.experience.map((e) =>
          e.id === id ? { ...e, ...next } : e,
        ),
      }));
    },
    [],
  );

  const setEducation = useCallback(
    (id: string, next: Partial<Education[number]>) => {
      setState((s) => ({
        ...s,
        education: s.education.map((e) =>
          e.id === id ? { ...e, ...next } : e,
        ),
      }));
    },
    [],
  );

  const setFile = useCallback((id: string, next: Partial<Files[number]>) => {
    setState((s) => ({
      ...s,
      files: s.files.map((f) => (f.id === id ? { ...f, ...next } : f)),
    }));
  }, []);

  const setPhotoCaption = useCallback((id: string, caption: string) => {
    setState((s) => ({
      ...s,
      photos: s.photos.map((p) => (p.id === id ? { ...p, caption } : p)),
    }));
  }, []);

  const resetAll = useCallback(() => setState(initial), []);

  const value = useMemo<ContentApi>(
    () => ({
      ...state,
      setProfile,
      setSocial,
      setNote,
      addNote,
      removeNote,
      setExperience,
      setEducation,
      setFile,
      setPhotoCaption,
      resetAll,
    }),
    [
      state,
      setProfile,
      setSocial,
      setNote,
      addNote,
      removeNote,
      setExperience,
      setEducation,
      setFile,
      setPhotoCaption,
      resetAll,
    ],
  );

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used inside ContentProvider");
  return ctx;
}
