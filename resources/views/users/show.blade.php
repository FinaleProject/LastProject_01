


	<h1>All Users</h1>		
	
	@foreach ($users as $user)
		<div>
			<a href="">{{ $user->name }} </a>
		</div>
	@endforeach
