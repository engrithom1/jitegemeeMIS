<template>
  <div class="midde_cont">
    <div class="container-fluid">
      <div class="row column_title">
        <div class="col-md-12">
          <div class="page_title">
            <h2>Admission > Add Student</h2>
          </div>
        </div>
      </div>
      <!--contents heaa-->
      <div class="row column4 graph">
        <div class="col-md-6">
          <div class="white_shd full margin_bottom_30">
            <div class="full graph_head">
              <div class="heading1 margin_0">
                <h2>Student Details</h2>
              </div>
            </div>
            <div class="full progress_bar_inner">
              <div class="row">
                <div class="col-md-12">
                  <form class="p-3">
                    <div class="form-group">
                      <label for="sindex">Index Number*</label>
                      <input
                        type="text"
                        class="form-control"
                        id="sindex"
                        placeholder="23-0011"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="sfname">First Name*</label>
                      <input
                        type="text"
                        class="form-control"
                        id="sfname"
                        placeholder="john"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="smname">Middle Name*</label>
                      <input
                        type="text"
                        class="form-control"
                        id="smname"
                        placeholder="juvenal"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="slname">Last Name*</label>
                      <input
                        type="text"
                        class="form-control"
                        id="slname"
                        placeholder="Bongo"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="shome">Home address*</label>
                      <input
                        type="text"
                        class="form-control"
                        id="shome"
                        placeholder="Dege Kigamboni"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="semail">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="semail"
                        placeholder="john@gmail.com"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="row">
                      <div class="col-sm-12 col-md-6">
                        <div class="form-group">
                      <label for="sphone">Phone</label>
                      <input
                        type="text"
                        class="form-control"
                        id="sphone"
                        placeholder="255768448525"
                      />
                    </div>
                    <div class="form-group">
                      <label for="sdate">Birth Date*</label>
                      <input
                        type="date"
                        class="form-control"
                        id="sdate"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="sgender"
                        >Gender*</label
                      >
                      <select
                        class="form-control"
                        id="sgender"
                      >
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                      </div>
                      <div class="col-sm-12 col-md-6">
                        <img class="mt-2" src="" id="s_photo" style="width:130px; height:140px;" alt=""/>
                        <div class="form-group">
                      <label for="sphoto">Photo*</label>
                      <input
                        type="file"
                        class="form-control"
                        id="sphoto"
                        aria-describedby="emailHelp"
                      />
                    </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1"
                        >Hearth and Behavior</label
                      >
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Hana tatizo la kiafya. nimtoro ingawa maendeleo yake siomabaya"
                      ></textarea>
                    </div>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div v-show="parent_exist" class="white_shd full margin_bottom_30">
            <div class="full graph_head">
              <div class="d-flex justify-content-between">
                <div class="heading1 margin_0 "><h2>Existing Parent</h2></div>
                <button v-on:click="this.parentExist" class="btn btn-success ml-0">Add Parent</button>
              </div>
            </div>
            <div class="full progress_bar_inner">
              <div class="row">
                <div class="col-md-12">
                  <div class="inbox-head">
                      <h3>found (10)</h3>
                      <form action="#" class="pull-right position search_inbox">
                        <div class="input-append">
                            <input type="text" class="sr-input" placeholder="Search parent">
                            <button class="btn sr-btn" type="button"><i class="fa fa-search"></i></button>
                        </div>
                      </form>
                  </div>
                  <div class="inbox-body">
                  <div class="mail-option">
                    
                    <ul class="unstyled inbox-pagination mb-3">
                        <li><span>1-50 of 234</span></li>
                        <li>
                          <a class="np-btn" href="#"><i class="fa fa-angle-left  pagination-left"></i></a>
                        </li>
                        <li>
                          <a class="np-btn" href="#"><i class="fa fa-angle-right pagination-right"></i></a>
                        </li>
                    </ul>
                    <table class="table table-inbox table-hover">
                      <tbody>
                        <tr class="">
                          <td class="view-message">Sambokile kandenga kindeki</td>
                          <td class="view-message inbox-small-cells">233789990012</td>
                          <td class="view-message text-right">
                            <button class="btn btn-info">select</button>
                          </td>
                        </tr>
                        <tr class="">
                          <td class="view-message">Sambokile kandenga kindeki</td>
                          <td class="view-message inbox-small-cells">233789990012</td>
                          <td class="view-message text-right">
                            <button class="btn btn-info">select</button>
                          </td>
                        </tr>
                        <tr class="">
                          <td class="view-message">Sambokile kandenga kindeki</td>
                          <td class="view-message inbox-small-cells">233789990012</td>
                          <td class="view-message text-right">
                            <button class="btn btn-info">select</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>    
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="!parent_exist" class="white_shd full margin_bottom_30">
              <div class="full graph_head">
              <div class="d-flex justify-content-between">
                <div class="heading1 margin_0 "><h2>Parent Details</h2></div>
                <button v-on:click="this.parentExist" class="btn btn-success ml-0">existing Parent</button>
              </div>
            </div>
            <div class="full progress_bar_inner">
              <div class="row">
                <div class="col-md-12">
                  <form class="p-3">
                    <div class="form-group">
                      <label for="pfname">First Name*</label>
                      <input
                        type="text"
                        class="form-control"
                        id="pfname"
                        placeholder="john"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="pmname">Middle Name*</label>
                      <input
                        type="text"
                        class="form-control"
                        id="pmname"
                        placeholder="juvenal"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="plname">Last Name*</label>
                      <input
                        type="text"
                        class="form-control"
                        id="plname"
                        placeholder="Bongo"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="phome">Home address*</label>
                      <input
                        type="text"
                        class="form-control"
                        id="phome"
                        placeholder="Dege Kigamboni"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="pemail">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="pemail"
                        placeholder="john@gmail.com"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="row">
                      <div class="col-sm-12 col-md-6">
                      <div class="form-group">
                      <label for="pphone">Phone</label>
                      <input
                        type="text"
                        class="form-control"
                        id="pphone"
                        placeholder="255768448525"
                      />
                    </div>
                    <div class="form-group">
                      <label for="occupation">Occupation</label>
                      <input
                        type="text"
                        class="form-control"
                        id="occupation"
                        placeholder="Bus driver"
                      />
                    </div>
                    
                    <div class="form-group">
                      <label for="pgender"
                        >Gender*</label
                      >
                      <select
                        class="form-control"
                        id="pgender"
                      >
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                      </div>
                      <div class="col-sm-12 col-md-6">
                        <img class="mt-2" src="" id="p_photo" style="width:130px; height:140px;" alt=""/>
                        <div class="form-group">
                      <label for="pphoto">Photo*</label>
                      <input
                        type="file"
                        class="form-control"
                        id="pphoto"
                        aria-describedby="emailHelp"
                      />
                    </div>
                      </div>
                    </div> 
                  </form>
                </div>
              </div>
            </div>
          </div>
          <button class="btn btn-success">Submit</button>
        </div>
      </div>
      <!--contents heaa-->
    </div>
    <!-- footer -->
    <div class="container-fluid">
      <div class="footer">
        <p>
          Copyright © 2023 Designed by aploscoder. All rights reserved.<br />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      parent_exist:false
    }
  },
  methods:{
    parentExist(){
      this.parent_exist = !this.parent_exist
    }
  }
}

</script>
