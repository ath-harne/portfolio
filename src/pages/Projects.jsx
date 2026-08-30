import React from 'react'

const Projects = () => {
 
  return (
   <section id="projects" class="py-12 px-6 bg-gradient-to-b from-gray-50 to-white">
  <div class="max-w-5xl mx-auto">
    

    <div class="space-y-6 mt-20">

      <div class="group relative p-5 rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400">
        <div class="absolute left-0 top-0 h-full w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
        <h3 class="text-lg font-semibold group-hover:text-blue-600 transition-colors">Doctor Booking Website</h3>
        <p class="text-sm text-gray-600 mt-1 group-hover:text-gray-800 transition">
          Built a full-stack web platform enabling patients to book appointments, check doctor availability, and manage schedules efficiently.
        </p>
        <ul class="text-sm text-gray-600 mt-2 list-disc ml-5 space-y-1">
          <li>Designed intuitive UI for seamless appointment booking experience</li>
          <li>Implemented real-time slot availability and scheduling logic</li>
          <li>Improved user accessibility and reduced booking conflicts</li>
        </ul>
        <div class="mt-3 flex flex-wrap gap-2">
          
          <span class="text-xs px-2 py-1 bg-gray-100 rounded group-hover:bg-blue-100 transition">JavaScript</span>
          <span class="text-xs px-2 py-1 bg-gray-100 rounded group-hover:bg-blue-100 transition">Node JS</span>
          <span class="text-xs px-2 py-1 bg-gray-100 rounded group-hover:bg-blue-100 transition">Express JS</span>
          <span class="text-xs px-2 py-1 bg-gray-100 rounded group-hover:bg-blue-100 transition">Mongodb</span>
          <span class="text-xs px-2 py-1 bg-gray-100 rounded group-hover:bg-blue-100 transition">React</span>
          <span class="text-xs px-2 py-1 bg-gray-100 rounded group-hover:bg-blue-100 transition">TailwindCSS</span>
          
          
        </div>
      </div>

      <div class="group relative p-5 rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400">
        <div class="absolute left-0 top-0 h-full w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
        <h3 class="text-lg font-semibold group-hover:text-blue-600 transition-colors">StockQuest</h3>
        <p class="text-sm text-gray-600 mt-1 group-hover:text-gray-800 transition">
          Developed a full-stack stock market learning and analysis platform to help users understand stock market concepts and track their learning progress.
        </p>
        <ul class="text-sm text-gray-600 mt-2 list-disc ml-5 space-y-1">
          <li>Learn stock market concepts through structured lessons designed to make financial topics easier to understand.</li>
          <li>Track completed lessons and monitor your overall learning progress from a dedicated progress dashboard</li>
          <li>Covers important stock market concepts and provides a structured path for users who are starting or improving their understanding of investing.</li>
          <li>Access your own learning data and progress</li>       
        </ul>
        <div class="mt-3 flex flex-wrap gap-2">
          <span class="text-xs px-2 py-1 bg-gray-100 rounded group-hover:bg-blue-100 transition">React</span>
          <span class="text-xs px-2 py-1 bg-gray-100 rounded group-hover:bg-blue-100 transition">Javascript</span>
          <span class="text-xs px-2 py-1 bg-gray-100 rounded group-hover:bg-blue-100 transition">MongoDB</span>
          <span class="text-xs px-2 py-1 bg-gray-100 rounded group-hover:bg-blue-100 transition">Node.Js</span>
           <span class="text-xs px-2 py-1 bg-gray-100 rounded group-hover:bg-blue-100 transition">Express.Js</span>        
        </div>
      </div>

      <div class="group relative p-5 rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400">
        <div class="absolute left-0 top-0 h-full w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
        <h3 class="text-lg font-semibold group-hover:text-blue-600 transition-colors">Automatic Duty Allocation System</h3>
        <p class="text-sm text-gray-600 mt-1 group-hover:text-gray-800 transition">
          Built a system to automate invigilation duty allocation for college examination cell using rule-based scheduling.
        </p>
        <ul class="text-sm text-gray-600 mt-2 list-disc ml-5 space-y-1">
          <li>Optimized allocation based on faculty availability and constraints</li>
          <li>Reduced manual effort and scheduling errors significantly</li>
          <li>Improved efficiency and ensured fair workload distribution</li>
        </ul>
        <div class="mt-3 flex flex-wrap gap-2">
          <span class="text-xs px-2 py-1 bg-gray-100 rounded group-hover:bg-blue-100 transition">Node.js</span>
          <span class="text-xs px-2 py-1 bg-gray-100 rounded group-hover:bg-blue-100 transition">Express</span>
          <span class="text-xs px-2 py-1 bg-gray-100 rounded group-hover:bg-blue-100 transition">MySQL</span>
          <span class="text-xs px-2 py-1 bg-gray-100 rounded group-hover:bg-blue-100 transition">TypeScript</span>
          <span class="text-xs px-2 py-1 bg-gray-100 rounded group-hover:bg-blue-100 transition">Tailwind</span>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default Projects
