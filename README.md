# 组件->commit->mutation->试图变更->响应式

1.actionTypes   actio类型

2.action    调用actio的方法
3.mutatios   更改satate的方法
4.state   中央数据池
5.store出口  action、mutations,state统一到仓库里进行管理

# 组件划分
Todolist
  1.TodoInput ->输入的组件
  2.TodoList  ->列表组件
    -TodoItem  ->列表项
      1.完成或未完成的选择 checkbox
      2.删除该项
      3.正在做确认按钮