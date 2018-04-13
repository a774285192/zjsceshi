<template>
  <div class="home">
  	 <el-dialog title="添加" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="课程" :label-width="formLabelWidth">
      <el-input v-model="form.ying" auto-complete="off"></el-input>
      <el-input v-model="form.yuwen" auto-complete="off"></el-input>
      <el-input v-model="form.shuxung" auto-complete="off"></el-input>
      <el-input v-model="form.dili" auto-complete="off"></el-input>
      <el-input v-model="form.wuli" auto-complete="off"></el-input>
      <el-input v-model="form.zhengzhi" auto-complete="off"></el-input>
      <el-input v-model="form.tiyu" auto-complete="off"></el-input>
      <el-input v-model="form.sixiang" auto-complete="off"></el-input>
    </el-form-item>
    
    <el-form-item label="课程" :label-width="formLabelWidth">
      <el-select v-model="form.yuwen" placeholder="请选择课程">
        <el-option label="数学" value="数学"></el-option>
        <el-option label="英语" value="英语"></el-option>
        <el-option label="物理" value="物理"></el-option>
        <el-option label="语文" value="语文"></el-option>
        <el-option label="体育" value="体育"></el-option>
        <el-option label="地理" value="地理"></el-option>
        <el-option label="政治" value="政治"></el-option>
        <el-option label="思想" value="思想"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
 
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="submit">确 定</el-button>
  </div>
</el-dialog>

  <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="name"
        width="90">
      </el-table-column>
      <el-table-column
        prop="ying"
        label="英语"
        width="90">
      </el-table-column>
      <el-table-column
        prop="yuwen"
        label="语文"
        width='90'>
      </el-table-column>
      <el-table-column
        prop="shuxung"
        label="数学"
        width='90'>
      </el-table-column>
      <el-table-column
        prop="dili"
        label="地理"
        width='90'>
      </el-table-column>
      <el-table-column
        prop="zhengzhi"
        label="政治"
        width='90'>
      </el-table-column>
      <el-table-column
        prop="wuli"
        label="物理"
        width='90'>
      </el-table-column>
      <el-table-column
        prop="tiyu"
        label="体育"
        width='90'>
      </el-table-column>
      <el-table-column
        prop="sixiang"
        label="思想"
        width='90'>
      </el-table-column>
       <el-table-column
        prop="sex"
        label="操作">
        <template slot-scope="scope">
        	<el-button type="text" @click.native.prevent="one(scope.row,1)">
        		
        		星期一</el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.row,1)"
          type="text"
          size="small">
          移除
        </el-button>
        <el-button type="success" 
          @click="dialogFormVisible = true"
          size="small"
         v-if="$route.params.id==1"
            >
          添加
          
        </el-button>
        	<el-button type="text" @click.native.prevent="two(scope.row,1)">
        		
        		星期二</el-button>
        		<el-button type="text" @click.native.prevent="three(scope.row,1)">
        		
        		星期三</el-button>
        		<el-button type="text" @click.native.prevent="si(scope.row,1)">
        		
        		星期四</el-button>
        		<el-button type="text" @click.native.prevent="wu(scope.row,1)">
        		
        		星期五</el-button>
        <el-button
        <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%">
  请输入内容<input type="text" /><br />
  请输入内容<input type="text" /><br />
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
      </template>
      </el-table-column>
      
    </el-table>
  </div>
</template>

<script>
 export default {
      data() {
        return {
          tableData: [],
            dialogVisible: false,
         dialogFormVisible:false,
         form:{},
         formLabelWidth:'120px'
         
        }
      },
      
      methods:{
      	
      	submit(){
      		this.dialogFormVisible =false;
      		this.$http.post("http://localhost:3000/add",this.form,{emulateJSON:true}).then(function(){
      		this.$message({
      			message:'添加成功',
      			type:'success'
      		});
      	this.Jch();
      			
      			
      		});
      	
      	
      	},
      	one(e){
      		this.$http.post("http://localhost:3000/update",{id:e.id,state:1},{emulateJSON:true}).then(function(){
      			this.$message({
      			message:'挪移成功',
      			type:'success'
      		});
      		})
      	},
      	two(e){
      		this.$http.post("http://localhost:3000/update",{id:e.id,state:2},{emulateJSON:true}).then(function(){
      				this.$message({
      			message:'挪移成功',
      			type:'success'
      		});
      		})
      	},
      	three(e){
      		this.$http.post("http://localhost:3000/update",{id:e.id,state:3},{emulateJSON:true}).then(function(){
      				this.$message({
      			message:'挪移成功',
      			type:'success'
      		});
      		})
      	},
      	si(e){
      		this.$http.post("http://localhost:3000/update",{id:e.id,state:4},{emulateJSON:true}).then(function(){
      				this.$message({
      			message:'挪移成功',
      			type:'success'
      		});
      		})
      	},
      	wu(e){
      		this.$http.post("http://localhost:3000/update",{id:e.id,state:5},{emulateJSON:true}).then(function(){
      				this.$message({
      			message:'挪移成功',
      			type:'success'
      		});
      		})
      	},
      	deleteRow(e){

      	this.$http.post('http://localhost:3000/del',{id:e.id},{emulateJSON:true}).then(function(){
      		var _index=this.tableData.indexOf(e)
      		this.tableData.splice(_index,1)
      		this.$message({
      			message:'删除成功',
      			type:'success'
      		});
      		
      	})
      	},
      	Jch(){
      		this.$http.post('http://localhost:3000',{},{emulateJSON:true}).then(e=>this.tableData=e.body)
      	}
      },
      watch:{
      	'$route':function(){
      		this.Jch()
      	}
      },
      created(){
      	this.Jch()
      	
      }
      
    }
</script>
