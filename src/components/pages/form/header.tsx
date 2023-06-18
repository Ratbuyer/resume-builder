import type * as types from '@constants/types';

export const Header = (
  {
    header,
    setHeader
  }
    :
    {
      header: types.headerType,
      setHeader: (header: types.headerType) => void
    }
) => {

  return <>
    <div className="contacts">
      <h1 className="text-xl mt-10">Contacts</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2" />

      <div className="mt-10 bg-gray-300 pt-2 pb-2 p-3 rounded-xl">
        <div className="mb-2 mt-2">
          <input
            type="text"
            id="name"
            autoComplete="name"
            name="name"
            required
            value={header.name}
            placeholder="Name"
            className="w-full bg-gray-50
         text-gray-900 rounded-lg block p-2.5 outline-0"
            onChange={(e) => setHeader({ ...header, name: e.target.value })}
          />
        </div>

        <div className="flex flex-row justify justify-between mb-2">
          <input
            type="tel"
            id="phone"
            autoComplete="phone"
            name="phone"
            required
            value={header.phone}
            placeholder="Phone"
            className="mr-1 w-1/2 bg-gray-50
         text-gray-900 rounded-lg block p-2.5 outline-0"
            onChange={(e) => setHeader({ ...header, phone: e.target.value })}
          />

          <input
            type="email"
            id="email"
            autoComplete="email"
            name="email"
            required
            value={header.email}
            placeholder="Email"
            className="w-1/2 bg-gray-50
         text-gray-900 rounded-lg block p-2.5 outline-0"
            onChange={(e) => setHeader({ ...header, email: e.target.value })}
          />
        </div>

        <div className="flex flex-row justify justify-between mb-2">
          <input
            type="url"
            id="github"
            name="github"
            value={header.github}
            placeholder="Github Link"
            className="mr-1 w-1/2 bg-gray-50
         text-gray-900 rounded-lg block p-2.5 outline-0"
            onChange={(e) => setHeader({ ...header, github: e.target.value })}
          />

          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={header.linkedin}
            placeholder="Linkedin Link"
            className="w-1/2 bg-gray-50
         text-gray-900 rounded-lg block p-2.5 outline-0"
            onChange={(e) => setHeader({ ...header, linkedin: e.target.value })}
          />
        </div>

      </div>
    </div>
  </>
};

export default Header;