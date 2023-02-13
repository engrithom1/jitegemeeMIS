<template>
  <div v-show="loged" class="full_container">
         <div class="inner_container">
            <!-- Sidebar  -->
            <nav id="sidebar">
               <div class="sidebar_blog_1">
                  <div class="sidebar-header">
                     <div class="logo_section">
                        <a href="index.html"><img class="logo_icon img-responsive" src="/assets/images/logo/jite.jpg" alt="#" /></a>
                     </div>
                  </div>
                  <div class="sidebar_user_info">
                     <div class="icon_setting"></div>
                     <div class="user_profle_side">
                        <div class="user_img"><img class="img-responsive" src="/assets/images/layout_img/man.png" alt="#" /></div>
                        <div class="user_info">
                           <h6>John Nyoni</h6>
                           <p><span class="online_animation"></span> Online</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="sidebar_blog_2">
                  <ul class="list-unstyled components">
                     <li class="active">
                        <router-link to="/"><i class="fa fa-dashboard yellow_color"></i> <span>Dashboard</span></router-link>
                     </li>
                     <li><a href="#admission" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-users orange_color"></i> <span>Admission</span></a>
                        <ul class="collapse list-unstyled" id="admission">
                           <li><router-link to="/addstudent">> <span>Add Student</span></router-link></li>
                           <li><router-link to="/allstudents">> <span>All Students</span></router-link></li>
                           <li><router-link to="/graduates">> <span>Graduates</span></router-link></li>
                        </ul>
                     </li>
                     <li>
                        <a href="#apps" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-graduation-cap blue2_color"></i> <span>Accademic</span></a>
                        <ul class="collapse list-unstyled" id="apps">
                           <li><router-link to="/classroom">> <span>Classroom</span></router-link></li>
                           <li><router-link to="/subjects">> <span>Subjects</span></router-link></li>
                        </ul>
                     </li>
                     <li>
                        <a href="#finance" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-money purple_color2"></i> <span>Finance</span></a>
                        <ul class="collapse list-unstyled" id="finance">
                           <li><router-link to="/student-fees">> <span>Student Fees</span></router-link></li>
                           <li><router-link to="/student-payments">> <span>Student Payments</span></router-link></li>
                           <li><router-link to="/payment-reports">> <span>Payments Reports</span></router-link></li>
                        </ul>
                     </li>
                     <li>
                        <a href="#exam" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-file-text green_color"></i> <span>Exammination</span></a>
                        <ul class="collapse list-unstyled" id="exam">
                           <li><a href="email.html">> <span>Student Exam Marks</span></a></li>
                           <li><a href="media_gallery.html">> <span>Student Exam Results</span></a></li>
                        </ul>
                     </li>
                     <li>
                        <a href="#staff" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-briefcase blue1_color"></i> <span>Staff</span></a>
                        <ul class="collapse list-unstyled" id="staff">
                           <li><a href="email.html">> <span>Teacher</span></a></li>
                           <li><a href="media_gallery.html">> <span>Other</span></a></li>
                        </ul>
                     </li>
                     <li>
                        <a href="#calendar" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-calendar blue1_color"></i> <span>Calendar</span></a>
                        <ul class="collapse list-unstyled" id="calendar">
                           <li><a href="email.html">> <span>Events</span></a></li>
                           <li><a href="media_gallery.html">> <span>Announcements</span></a></li>
                        </ul>
                     </li>
                     <li>
                        <a href="contact.html">
                        <i class="fa fa-paper-plane red_color"></i> <span>Contact</span></a>
                     </li>
                     <li><a href="#setting" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-cog yellow_color"></i> <span>Settings</span></a>
                        <ul class="collapse list-unstyled" id="setting">
                           <li>
                              <a href="dashboard.html">> <span>Profile</span></a>
                           </li>
                           <li>
                              <a href="dashboard_2.html">> <span>Log Out</span></a>
                           </li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </nav>
            <!-- end sidebar -->
            <!-- right content -->
            <div id="content">
               <!-- topbar -->
               <div class="topbar">
                  <nav class="navbar navbar-expand-lg navbar-light">
                     <div class="full">
                        <button type="button" id="sidebarCollapse" class="sidebar_toggle"><i class="fa fa-bars"></i></button>
                        <div class="logo_section">
                           <!--a href="index.html"><img class="img-responsive" src="/assets/images/logo/jite.jpg" alt="#" /></a-->
                           <h1 class="text-white mt-3 ml-3">JITEGEMEE MIS</h1>
                        </div>
                        <div class="right_topbar">
                           <div class="icon_info">
                              <ul>
                                 <li><a href="#"><i class="fa fa-bell-o"></i><span class="badge">2</span></a></li>
                                 <li><a href="#"><i class="fa fa-question-circle"></i></a></li>
                                 <li><a href="#"><i class="fa fa-envelope-o"></i><span class="badge">3</span></a></li>
                              </ul>
                              <!--ul class="user_profile_dd">
                                 <li>
                                    <a class="dropdown-toggle" data-toggle="dropdown"><img class="img-responsive rounded-circle" src="/assets/images/layout_img/user_img.jpg" alt="#" /><span class="name_user">John David</span></a>
                                    <div class="dropdown-menu">
                                       <a class="dropdown-item" href="profile.html">My Profile</a>
                                       <a class="dropdown-item" href="settings.html">Settings</a>
                                       <a class="dropdown-item" href="help.html">Help</a>
                                       <a class="dropdown-item" href="#"><span>Log Out</span> <i class="fa fa-sign-out"></i></a>
                                    </div>
                                 </li>
                              </ul-->
                           </div>
                        </div>
                     </div>
                  </nav>
               </div>
               <!-- end topbar -->
               <!-- inner contents -->
               <router-view :key="$route.fullPath"/>
               <!-- end inner contents -->
            </div>
         </div>
  </div>

  <div v-show="!loged">
    <Login/>
  </div>
</template>

<style>
label{
   font-weight: 600;
}
</style>

<script>

import Login from "./views/Login.vue"

export default {

  components:{
    Login
  },
  data() {
    return{
      loged:true
    }
  },
}
</script>