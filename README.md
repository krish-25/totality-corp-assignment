# totality-corp-assignment

Tech Stack Used: ReactJs, Javascript, Tailwind CSS
Deployed On: Netlify

Setup Instructions:
1. Clone the project on your PC.
2. Inside project's root directory run: npm install
3. Type this command to start the project on your machine: npm start

You can also checkout this project hosted here: https://totality-corp-abhishek.netlify.app/

-------------------Approch-------------------

Folder Structure:
1. The website is divided into sections.
2. Each Section is given a unique name, which in turn is a unique React Component.
3. There are total 8 sections and are contained in sections directory.
4. To take advantage of the React library, some components which mostly include cards are also created inside components directory.
5. To avoid writing same code repeatedly the tet which are of same formats iniside a sections are included in json format inside json files directory.
6. All the images and picture are included section-wise inside assets directory.

Step wise build up:
1. First Json files are created for those contents which repeat in same manner --- <json_files>
2. All the pictures, icons and images are downloaded section-wise and kept together  --- <assets>
3. Tailwind CSS integrated to the project.
4. The entire UI is divided into sections --- <sections>
5. Components created to assist the sections --- <components>
6. One section was completed at a time and components were created as per requirement for the section which was being coded.
7. Firstly the static of every section was completed.
8. Then some dynamic taks like - FAQ collapse or horizontal scroll were completed.
9. Background designing was done at the last, in which some floating obejcts were placed in the background.
10. The UI was screened to check for possible errors.
11. The final changes were pushed.
  
Commits - The commits to this repo are in the following 2 formats:
1. For a section:
  
    < Section No - Section Name - sub task(optional) - status >
      
2. If the task is not on particular section
      
    < commit message >


