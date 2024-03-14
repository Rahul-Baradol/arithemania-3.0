import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { pes, shunyaUpdated } from '../../../public'
import { useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

function Navbar() {
   const { isOpen, onOpen, onClose } = useDisclosure();

   const [memberCount, setMemberCount] = useState(4);

   const [teamMembers, setTeamMembers] = useState([
      {
         id: 1,
         name: '',
         srn: '',
         email: '',
         phone: '',
         semester: 1,
         campus: 'RR',
         branch: 'CSE',
         other_branch: '',
         gender: 'Male',
         guardian_name: '',
         guardian_phone: '',
         is_hostellite: false,
         hostel_room: '',
      },
      {
         id: 2,
         name: '',
         srn: '',
         email: '',
         phone: '',
         semester: 1,
         campus: 'RR',
         branch: 'CSE',
         other_branch: '',
         gender: 'Male',
         guardian_name: '',
         guardian_phone: '',
         is_hostellite: false,
         hostel_room: '',
      },
      {
         id: 3,
         name: '',
         srn: '',
         email: '',
         phone: '',
         semester: 1,
         campus: 'RR',
         branch: 'CSE',
         other_branch: '',
         gender: 'Male',
         guardian_name: '',
         guardian_phone: '',
         is_hostellite: false,
         hostel_room: '',
      },
      {
         id: 4,
         name: '',
         srn: '',
         email: '',
         phone: '',
         semester: 1,
         campus: 'RR',
         branch: 'CSE',
         other_branch: '',
         gender: 'Male',
         guardian_name: '',
         guardian_phone: '',
         is_hostellite: false,
         hostel_room: '',
      },
   ]);

   const [teamName, setTeamName] = useState('');
   const [domain, setDomain] = useState(
      'Data Science and Intelligent Communication'
   );
   const [problemStatement, setProblemStatement] = useState('');
   const [solution, setSolution] = useState('');
   const [link, setLink] = useState('(Optional PPT Link)');

   const [registeredTeams, setRegisteredTeams] = useState([]);

   const [loading, setLoading] = useState(false);

   const validateData = (e) => {
      e.preventDefault();
      for (let i = 0; i < registeredTeams.length; i++) {
         const team = registeredTeams[i];
         if (team === teamName) {
            toast('Team Name already taken');
            return;
         }
      }

      if (teamName.length === 0) {
         toast('Team Name cannot be empty');
         return;
      }
      if (problemStatement.length === 0) {
         toast('Problem Statement cannot be empty');
         return;
      }
      if (solution.length === 0) {
         toast('Solution cannot be empty');
         return;
      }

      for (let i = 0; i < 3; i++) {
         const member = teamMembers[i];
         if (member.name.length === 0) {
            toast(`Name Field - ${member.id} empty`);
            return;
         }
         if (
            member.srn.length === 0 ||
            !member.srn.includes('PES' || 'pes') ||
            member.srn.length < 13
         ) {
            toast(`SRN - ${member.id} invalid`);
            return;
         }
         if (!member.email.includes('@') && !member.email.includes('.')) {
            toast(`Email - ${member.id} invalid`);
            return;
         }
         if (
            member.phone === '' ||
            member.phone.toString().length < 10 ||
            member.phone.toString().length > 10
         ) {
            toast(`Phone - ${member.id} invalid`);
            return;
         }
         if (member.branch === 'Others') {
            if (member.other_branch.length === 0) {
               toast(`Branch Name - ${member.id} empty`);
            }
         }
         if (member.guardian_name.length === 0) {
            toast(`Parents Name - ${member.id} empty`);
            return;
         }
         if (
            member.guardian_phone === '' ||
            member.guardian_phone.toString().length < 10 ||
            member.guardian_phone.toString().length > 10
         ) {
            toast(`Parents Phone - ${member.id} invalid`);
            return;
         }
         if (member.is_hostellite) {
            if (member.hostel_room.length === 0) {
               toast(`Enter Hostel Room - ${member.id}`);
               return;
            }
         }
      }

      handleSubmit();

      // if (link.length === 0) {
      //   toast('Link cannot be empty');
      //   return;
      // }



      // let cntmem = 0, cntsrn = 0, cntemail = 0, cntphone = 0, cntbranch = 0, cntguardian_name = 0;
      // let cntguardian_phone = 0, cnthostel_room = 0;

      // let firstJob = new Promise((resolve, reject) => {
      //   for (let i = 0; i < teamMembers.length; i++) {
      //     const member = teamMembers[i];
      //     if (member.name.length === 0) {
      //       cntmem++;
      //       // toast(`Name Field - ${member.id} empty`);
      //       // return;
      //     }
      //     if (
      //       member.srn.length === 0 ||
      //       !member.srn.includes('PES' || 'pes') ||
      //       member.srn.length < 13
      //     ) {
      //       cntsrn++;
      //       // toast(`SRN - ${member.id} invalid`);
      //       // return;
      //     }
      //     if (!member.email.includes('@') && !member.email.includes('.')) {
      //       cntemail++;
      //       // toast(`Email - ${member.id} invalid`);
      //       // return;
      //     }
      //     if (
      //       member.phone === '' ||
      //       member.phone.toString().length < 10 ||
      //       member.phone.toString().length > 10
      //     ) {
      //       cntphone++;
      //       // toast(`Phone - ${member.id} invalid`);
      //       // return;
      //     }
      //     if (member.branch === 'Others') {
      //       if (member.other_branch.length === 0) {
      //         cntbranch++;
      //         // toast(`Branch Name - ${member.id} empty`);
      //       }
      //     }
      //     if (member.guardian_name.length === 0) {
      //       cntguardian_name++;
      //       // toast(`Parents Name - ${member.id} empty`);
      //       // return;
      //     }
      //     if (
      //       member.guardian_phone === '' ||
      //       member.guardian_phone.toString().length < 10 ||
      //       member.guardian_phone.toString().length > 10
      //     ) {
      //       cntguardian_phone++;
      //       // toast(`Parents Phone - ${member.id} invalid`);
      //       // return;
      //     }
      //     if (member.is_hostellite) {
      //       if (member.hostel_room.length === 0) {
      //         cnthostel_room++;
      //         // toast(`Enter Hostel Room - ${member.id}`);
      //         // return;
      //       }
      //     }
      //   }
      //   resolve();
      // })

      // firstJob.then(()=>{
      //   if (cntmem > 1) {
      //     toast(`Name Field - ${member.id} empty`);
      //     return;
      //   } else if (cntsrn > 1) {
      //     toast(`SRN - ${member.id} invalid`);
      //     return;
      //   } else if (cntemail > 1) {
      //     toast(`Email - ${member.id} invalid`);
      //     return;
      //   } else if (cntphone > 1) {
      //     toast(`Phone - ${member.id} invalid`);
      //     return;
      //   } else if (cntbranch > 1) {
      //     toast(`Branch Name - ${member.id} empty`);
      //     return;
      //   } else if (cntguardian_name  > 1) {
      //     toast(`Parents Name - ${member.id} empty`);
      //     return;
      //   } else if (cntguardian_phone > 1) {
      //     toast(`Parents Phone - ${member.id} invalid`);
      //     return;
      //   } else if (cnthostel_room > 1) {
      //     toast(`Enter Hostel Room - ${member.id}`);
      //     return;
      //   } else {
      //     handleSubmit();
      //   }
      // })

   };

   const handleTextChange = (id, newValue, field) => {
      setTeamMembers((prevItems) => {
         const updatedItems = prevItems.map((item) => {
            if (item.id === id) {
               return {
                  ...item,
                  [field]: newValue,
               };
            }
            return item;
         });
         return updatedItems;
      });
   };

   const handleSubmit = async () => {
      const resetData = () =>
         new Promise(() => {
            setMemberCount(4);
            setTeamName('');
            setProblemStatement('');
            setSolution('');
            setLink('');
            setTeamMembers([
               {
                  id: 1,
                  name: '',
                  srn: '',
                  email: '',
                  phone: '',
                  semester: 1,
                  campus: 'RR',
                  branch: 'CSE',
                  other_branch: '',
                  gender: 'Male',
                  guardian_name: '',
                  guardian_phone: '',
                  is_hostellite: false,
                  hostel_room: '',
               },
               {
                  id: 2,
                  name: '',
                  srn: '',
                  email: '',
                  phone: '',
                  semester: 1,
                  campus: 'RR',
                  branch: 'CSE',
                  other_branch: '',
                  gender: 'Male',
                  guardian_name: '',
                  guardian_phone: '',
                  is_hostellite: false,
                  hostel_room: '',
               },
               {
                  id: 3,
                  name: '',
                  srn: '',
                  email: '',
                  phone: '',
                  semester: 1,
                  campus: 'RR',
                  branch: 'CSE',
                  other_branch: '',
                  gender: 'Male',
                  guardian_name: '',
                  guardian_phone: '',
                  is_hostellite: false,
                  hostel_room: '',
               },
               {
                  id: 4,
                  name: '',
                  srn: '',
                  email: '',
                  phone: '',
                  semester: 1,
                  campus: 'RR',
                  branch: 'CSE',
                  other_branch: '',
                  gender: 'Male',
                  guardian_name: '',
                  guardian_phone: '',
                  is_hostellite: false,
                  hostel_room: '',
               },
            ]);
            setRegisteredTeams([]);
         });

      const submitData = async () => {
         try {
            setLoading(true);
            await setDoc(doc(db, 'teams2024', teamName), {
               teamName,
               domain,
               problemStateMent: problemStatement,
               solution,
               link,
               teamMembers,
            }).then(() => {
               setLoading(false);
               toast('Your response has been successfully submitted.');
               setCookie('completedRegistration', 'true');
            });
            await resetData();
         } catch (err) {
            toast('There seems to be a problem submitting your response.');
            setLoading(false);
         }
      };
      submitData();
   };

   return (
      <>
         <nav className="absolute z-10 pt-2 flex flex-row w-screen h-fit justify-between items-center bg-transparent">
            <motion.div
               className='h-fit w-fit flex items-center gap-1 pl-2'
               initial={{ opacity: 0, x: -20, y: -20 }}
               whileInView={{ opacity: 1, x: 0, y: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
            >
               <a>
                  <Image
                     src={shunyaUpdated}
                     className='w-[60px] md:w-[75px] lg:w-[100px] aspect-auto'
                     alt=""
                  />
               </a>
               <a target='_blank' href='https://pes.edu/'>
                  <Image
                     src={pes}
                     className='w-[60px] md:w-[75px] lg:w-[100px] aspect-auto'
                     alt=""
                  />
               </a>
            </motion.div>
            <motion.div
               whileTap={{
                  scale: 0.8,
               }}

               initial={{ opacity: 0, x: 20, y: -20 }}
               whileInView={{ opacity: 1, x: 0, y: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
            >
               <button
                  onClick={onOpen}
                  className="bg-transparent text-white font-semibold text-[10px] px-4 py-2 sm:text-[12px] sm:px-8 sm:py-3 mr-5 rounded-lg border-2 border-white hover:bg-white hover:text-black transition duration-300"
               >
                  Register
               </button>
            </motion.div>

            <Modal
               size={"full"}
               isOpen={isOpen}
               onClose={onClose}
               className='bg-[#2a0447]'
               scrollBehavior={"inside"}
            >
               <ModalContent>
                  {(onClose) => (
                     <>
                        <ModalHeader className="text-white flex flex-col gap-1">Registration</ModalHeader>
                        <ModalBody>
                           <form
                              // onSubmit={validateData}
                              className="flex flex-col text-left items-center w-full sm:rounded-[20px] sm:border-[1px] sm:border-white] relative sm:p-10 sm:gradient-05"
                           >
                              <div className="text-lg flex flex-col font-mono text-white mb-6 font-bold w-full">
                                 if any queries please contact{' '}
                                 <span className="text-blue-400">shunya@pes.edu</span>
                                 or any of our socials
                              </div>
                              <label className="text-lg flex flex-col font-mono text-white mb-6 font-bold w-full">
                                 Team Name
                                 <input
                                    className="text-base w-full h-12 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151] focus:outline-none"
                                    type="text"
                                    value={teamName}
                                    onChange={(e) => setTeamName(e.target.value)}
                                 />
                              </label>

                              {/* <label className="text-lg flex flex-col font-mono text-white mb-6 font-bold w-full">
                                 Domain
                                 <select
                                    className="text-base w-full h-12 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-primary-blue border-[1px] border-[#374151] focus:outline-none"
                                    onChange={(e) => setDomain(e.target.value)}
                                 >
                                    <option value="Data Science and Intelligent Communication">
                                    Data Science and Intelligent Communication
                                    </option>
                                    <option value="Robotics and Automation">
                                    Robotics and Automation
                                    </option>
                                    <option value="Bigdata Analytics">Bigdata Analytics</option>
                                 </select>
                              </label> */}

                              <label className="text-lg flex flex-col font-mono text-white mb-6 font-bold w-full">
                                 Problem Statement
                                 <input
                                    className="text-base focus:outline-none w-full h-12 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151]"
                                    value={problemStatement}
                                    onChange={(e) => setProblemStatement(e.target.value)}
                                    type="text"
                                 />
                              </label>

                              <label className="text-lg flex flex-col font-mono text-white mb-6 font-bold w-full">
                                 Solution
                                 <div>
                                    Here is the format we are looking for:
                                    <ul className="list-disc list-inside text-sm">
                                       <li>Problem Statement</li>
                                       <li>Proposed Solution</li>
                                       <li>Approach</li>
                                       <li>Use Case</li>
                                       <li>Feasibility</li>
                                       <li>Tech Stack</li>
                                    </ul>
                                 </div>
                                 <textarea
                                    className="text-base focus:outline-none w-full min-h-40 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151]"
                                    value={solution}
                                    onChange={(e) => setSolution(e.target.value)}
                                 ></textarea>
                              </label>

                              {/*<label className="text-lg flex flex-col font-mono text-white mb-6 font-bold w-full">
                                 Idea Presentation Link
                                 <div className="text-sm">
                                    You can follow the following template and submit it as a link -
                                    <Link
                                    href="https://www.canva.com/design/DAFxh3f-dsQ/P1qp-_c_WvXG_mdbpyM92g/edit?utm_content=DAFxh3f-dsQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                                    target="_blank"
                                    >
                                    <span className="text-xl text-blue-400"> Idea template </span>
                                    </Link>
                                    (Optional) (Make a Copy)
                                 </div>
                                 <input
                                    className="text-base focus:outline-none w-full h-12 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151]"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                 ></input>
                              </label>*/}

                              <div className="flex flex-col mt-[30px] w-full">
                                 <div className="flex flex-row items-center justify-between mb-[20px]">
                                    <h2 className="text-2xl font-bold text-white font-mono text">
                                       Team Details
                                    </h2>
                                    {/* {memberCount === 3 && (
                                       <button
                                       className="text-white font-mono font-bold text-base border-[1px] border-[#374151] rounded p-[3px] cursor-pointer"
                                       onClick={addMember}
                                       >
                                       Add Member
                                       </button>
                                    )}
                                    {memberCount === 4 && (
                                       <button
                                       className="text-white font-mono font-bold text-base border-[1px] border-[#374151] rounded p-[3px] cursor-pointer"
                                       onClick={removeMember}
                                       >
                                       Remove Member
                                       </button>
                                    )} */}
                                 </div>

                                 <div className="w-full h-auto flex flex-col gap-8 md:justify-center md:flex-row md:flex-wrap">
                                    {teamMembers.map((data, index) => (
                                       <div
                                          key={index}
                                          className="flex sm:w-3/12 flex-col rounded-[20px] border-[1px] border-[#6A6A6A] relative p-10 gradient-05 md:w-[calc(50%-32px)]"
                                       >
                                          <span className="text-lg text-white font-bold font-mono mb-[10px]">
                                             Member {data.id}:
                                          </span>
                                          <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                             Name
                                             <input
                                                className="text-base focus:outline-none w-full h-8 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151]"
                                                type="text"
                                                value={data.name}
                                                onChange={(e) =>
                                                   handleTextChange(data.id, e.target.value, 'name')
                                                }
                                             />
                                          </label>

                                          <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                             SRN
                                             <input
                                                className="text-base focus:outline-none w-full h-8 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151]"
                                                type="text"
                                                value={data.srn}
                                                onChange={(e) =>
                                                   handleTextChange(data.id, e.target.value, 'srn')
                                                }
                                             />
                                          </label>

                                          <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                             Email
                                             <input
                                                className="text-base focus:outline-none w-full h-8 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151]"
                                                type="email"
                                                value={data.email}
                                                onChange={(e) =>
                                                   handleTextChange(data.id, e.target.value, 'email')
                                                }
                                             />
                                          </label>

                                          <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                             Phone
                                             <input
                                                className="text-base focus:outline-none w-full h-8 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151]"
                                                type="number"
                                                value={data.phone}
                                                onChange={(e) =>
                                                   handleTextChange(data.id, e.target.value, 'phone')
                                                }
                                             />
                                          </label>

                                          <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                             Semester
                                             <select
                                                className="text-base focus:outline-none w-full h-8 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151]"
                                                onChange={(e) =>
                                                   handleTextChange(data.id, e.target.value, 'semester')
                                                }
                                             >
                                                <option value={1}>1</option>
                                                <option value={3}>3</option>
                                                <option value={5}>5</option>
                                                <option value={7}>7</option>
                                             </select>
                                          </label>

                                          <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                             Campus
                                             <select
                                                className="text-base focus:outline-none w-full h-8 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151]"
                                                onChange={(e) =>
                                                   handleTextChange(data.id, e.target.value, 'campus')
                                                }
                                             >
                                                <option value="RR">RR</option>
                                                <option value="EC">EC</option>
                                                <option value="HN">HN</option>
                                             </select>
                                          </label>

                                          <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                             Branch
                                             <select
                                                className="text-base focus:outline-none w-full h-8 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151]"
                                                onChange={(e) =>
                                                   handleTextChange(data.id, e.target.value, 'branch')
                                                }
                                             >
                                                <option value="CSE">CSE</option>
                                                <option value="ECE">ECE</option>
                                                <option value="EEE">EEE</option>
                                                <option value="Mech">Mech</option>
                                                <option value="BioTech">BioTech</option>
                                                <option value="Others">Others</option>
                                             </select>
                                          </label>
                                          {data.branch === 'Others' && (
                                             <label className="flex flex-col mb-6 font-bold text-white font-mono">
                                                Branch Name
                                                <input
                                                   className="text-base focus:outline-none w-full h-8 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151]"
                                                   value={data.other_branch}
                                                   onChange={(e) =>
                                                      handleTextChange(
                                                         data.id,
                                                         e.target.value,
                                                         'other_branch'
                                                      )
                                                   }
                                                   type="text"
                                                />
                                             </label>
                                          )}

                                          <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                             Gender
                                             <select
                                                className="text-base focus:outline-none w-full h-8 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151]"
                                                onChange={(e) =>
                                                   handleTextChange(data.id, e.target.value, 'gender')
                                                }
                                             >
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Others">Others</option>
                                             </select>
                                          </label>

                                          <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                             Parents Name
                                             <input
                                                className="text-base focus:outline-none w-full h-8 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151]"
                                                value={data.guardian_name}
                                                onChange={(e) =>
                                                   handleTextChange(
                                                      data.id,
                                                      e.target.value,
                                                      'guardian_name'
                                                   )
                                                }
                                                type="text"
                                             />
                                          </label>

                                          <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                             Parents Phone Number
                                             <input
                                                className="text-base focus:outline-none w-full h-8 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151]"
                                                value={data.guardian_phone}
                                                onChange={(e) =>
                                                   handleTextChange(
                                                      data.id,
                                                      e.target.value,
                                                      'guardian_phone'
                                                   )
                                                }
                                                type="number"
                                             />
                                          </label>

                                          <label className="flex flex-col font-mono text-white mb-6 font-bold">
                                             Are you a hostellite?
                                             <select
                                                className="text-base focus:outline-none w-full h-8 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151]"
                                                onChange={(e) =>
                                                   handleTextChange(
                                                      data.id,
                                                      e.target.value === 'No' ? false : true,
                                                      'is_hostellite'
                                                   )
                                                }
                                             >
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                             </select>
                                          </label>
                                          {data.is_hostellite && (
                                             <label className="flex flex-col mb-6 font-bold text-white font-mono">
                                                Hostel Room No
                                                <input
                                                   className="text-base focus:outline-none w-full h-8 rounded mt-4 pl-2 pr-2 text-white font-mono font-normal bg-transparent border-[1px] border-[#374151]"
                                                   value={data.hostel_room}
                                                   onChange={(e) =>
                                                      handleTextChange(
                                                         data.id,
                                                         e.target.value,
                                                         'hostel_room'
                                                      )
                                                   }
                                                   type="text"
                                                />
                                             </label>
                                          )}
                                       </div>
                                    ))}
                                 </div>
                              </div>

                              {/* <button
                                 className="text-white border-[1px] p-[15px] rounded w-[50%] mb-[30px] mt-20 font-extrabold text-2xl hover:bg-[rgba(0,0,0,0.3)]"
                                 type="submit"
                              >
                                 <div className='text-sm md:text-lg'>
                                    {loading ? 'Submitting...' : 'Register'}
                                 </div>
                              </button> */}
                           </form>
                        </ModalBody>
                        <ModalFooter>
                           <Button color="primary" onPress={onClose} className='px-6 py-2 bg-[#390461]'>
                              {loading ? 'Submitting...' : 'Register'}
                           </Button>
                        </ModalFooter>
                     </>
                  )}
               </ModalContent>
            </Modal>
         </nav>
      </>
   )
}

export default Navbar